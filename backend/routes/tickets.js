import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { tenantIsolation } from "../middleware/RBAC.js";
import Ticket from "../models/Ticket.js";

const router = express.Router();

// Get tickets for tenant
router.get("/", authMiddleware, tenantIsolation, async (req, res) => {
  const tickets = await Ticket.find({ customerId: req.tenantId });
  res.json(tickets);
});

// Create ticket
router.post("/", authMiddleware, tenantIsolation, async (req, res) => {
  const { subject, description } = req.body;
  const ticket = new Ticket({
    subject,
    description,
    customerId: req.tenantId,
    status: "open",
    createdBy: req.user.userId
  });
  await ticket.save();
  // TODO: Trigger n8n workflow here (dummy for now)
  res.status(201).json(ticket);
});

export default router;
