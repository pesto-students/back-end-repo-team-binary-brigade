const validateRequiredKeys = (requiredKeys) => (req, res, next) => {
  const missingKeys = [];
  requiredKeys.forEach((key) => {
    if (!(key in req.body)) {
      missingKeys.push(key);
    }
  });

  if (missingKeys.length > 0) {
    return res
      .status(400)
      .json({ message: `Missing required keys: ${missingKeys.join(", ")}` });
  }

  next();
};
export default validateRequiredKeys;
