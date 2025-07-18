import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  description: { type: String, required: true },
  customerId: { type: String, required: true },
  status: { type: String, default: "open" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.model("Ticket", ticketSchema);
