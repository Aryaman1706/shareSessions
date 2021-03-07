// * Middleware to check if user is logged in
exports.userIsLoggedIn = (req, res, next) => {
  // Session is present
  if (req.user) {
    next();
  } else {
    // Session is absent
    return res.status(401).json({ error: "Permission Denied.", body: null });
  }
};
