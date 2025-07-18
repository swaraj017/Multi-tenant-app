import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  customerId: { type: String, required: true },
  role: { type: String, required: true, enum: ["admin", "user"] },
});

export default mongoose.model("User", userSchema);
