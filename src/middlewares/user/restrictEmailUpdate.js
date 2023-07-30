const restrictEmailUpdate = async (req, res, next) => {
  const { email } = req.body;

  if (email) {
    return res.status(409).json({ message: `Email can't be updated!` });
  }

  next();
};

export default restrictEmailUpdate;
