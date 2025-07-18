// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import ticketRoutes from "./routes/tickets.js";
import { authMiddleware } from "./middleware/auth.js";
import { adminOnly } from "./middleware/RBAC.js";
import meRoutes from "./routes/me.js";

const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/me", meRoutes);

// Example admin route
app.use("/admin", authMiddleware, adminOnly, (req, res) => {
  res.json({ message: "Welcome Admin" });
});


// Webhook endpoint for n8n
import Ticket from "./models/Ticket.js";
app.post("/webhook/ticket-done", async (req, res) => {
  const secret = req.headers["x-webhook-secret"];
  if (secret !== process.env.WEBHOOK_SECRET) {
    return res.status(403).json({ message: "Invalid webhook secret" });
  }
  const { ticketId, status } = req.body;
  const ticket = await Ticket.findById(ticketId);
  if (!ticket) return res.status(404).json({ message: "Ticket not found" });
  ticket.status = status;
  await ticket.save();
  res.json({ message: "Ticket updated" });
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
