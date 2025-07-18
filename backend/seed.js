import mongoose from "mongoose";
import User from "./models/User.js";
import dotenv from "dotenv";
dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await User.deleteMany({});
await User.create([
  { name: "AdminA", email: "a@a.com", password: "$2a$10$testhash", role: "Admin", customerId: "LogisticsCo" },
  { name: "AdminB", email: "b@b.com", password: "$2a$10$testhash", role: "Admin", customerId: "RetailGmbH" }
]);

console.log("Seeded tenants and admins");
process.exit();
