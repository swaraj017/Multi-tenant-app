export const adminOnly = (req, res, next) => {
  if (req.user?.role !== "Admin") {
    return res.status(403).json({ message: "Admins only" });
  }
  next();
};

export const tenantIsolation = (req, res, next) => {
  // For routes that require tenant isolation, check req.user.customerId
  req.tenantId = req.user?.customerId;
  next();
};
