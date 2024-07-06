export const authorizeRole = (role) => {
  return (req, res, next) => {
    console.log('User session:', req.session.user); // Log user session
    if (!req.session || !req.session.user || req.session.user.role !== role) {
      return res.sendStatus(403); // Forbidden if role doesn't match
    }
    next();
  };
};