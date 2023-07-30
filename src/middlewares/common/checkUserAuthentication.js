import jwt from "jsonwebtoken";

const checkUserAuthentication = (req, res, next) => {
  // Exclude login and signup route from token verification
  if (
    req.path === "/authentication" ||
    (req.path === "/user" && req.method === "POST")
  ) {
    return next();
  }
  // Get the token from the request headers
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  try {
    // Verify and decode the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // decodedToken or user details
    req.user = decodedToken;
    next(); // Proceed to the next middleware
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
export default checkUserAuthentication;
