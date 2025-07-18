import request from "supertest";
import app from "../server.js";
import mongoose from "mongoose";
import User from "../models/User.js";
import Ticket from "../models/Ticket.js";

// Setup: create two tenants and tickets
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany({});
  await Ticket.deleteMany({});
  const adminA = new User({ name: "AdminA", email: "a@a.com", password: "$2a$10$testhash", role: "Admin", customerId: "LogisticsCo" });
  const adminB = new User({ name: "AdminB", email: "b@b.com", password: "$2a$10$testhash", role: "Admin", customerId: "RetailGmbH" });
  await adminA.save();
  await adminB.save();
  const ticketA = new Ticket({ subject: "A", description: "desc", customerId: "LogisticsCo", status: "open", createdBy: adminA._id });
  const ticketB = new Ticket({ subject: "B", description: "desc", customerId: "RetailGmbH", status: "open", createdBy: adminB._id });
  await ticketA.save();
  await ticketB.save();
});

afterAll(async () => {
  await mongoose.connection.close();
});

test("Admin A cannot access Tenant B's tickets", async () => {
  // Simulate JWT for AdminA
  const tokenA = "Bearer " + require("jsonwebtoken").sign({ userId: "adminA", customerId: "LogisticsCo", role: "Admin" }, process.env.JWT_SECRET);
  const res = await request(app)
    .get("/api/tickets")
    .set("Authorization", tokenA);
  expect(res.body.some(t => t.customerId === "RetailGmbH")).toBe(false);
});
