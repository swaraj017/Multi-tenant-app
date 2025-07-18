import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import fs from "fs";
import path from "path";

const registryPath = path.resolve(process.cwd(), "registry.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf-8"));

const router = express.Router();

router.get("/screens", authMiddleware, (req, res) => {
  const tenant = req.user.customerId;
  const screens = registry.filter(r => r.tenant === tenant);
  res.json(screens);
});

export default router;
