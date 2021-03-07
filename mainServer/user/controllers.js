const { genSalt, hash } = require("bcryptjs");

// * Models
const User = require("./model");

// * Utils
const validators = require("./validators");

// * Controllers ->
exports.signup = async (req, res) => {
  try {
    // Validating req.body
    const { error, value } = validators.signUp(req.body);
    if (error)
      return res.status(400).json({
        error: "Validation Error",
        body: null,
      });

    // Checking if account already exists
    if (await User.findOne({ email: value.email }).exec())
      return res.status(400).json({
        error: "User already exists",
        body: null,
      });

    // Hashing the password
    const salt = await genSalt(10);
    const password = await hash(value.password, salt);

    // Create new account
    User.create({
      name: value.name,
      email: value.email,
      password,
    });

    return res.status(200).json({
      error: null,
      body: "New user registered successfully.",
    });
  } catch (error) {
    console.error("Error occured here\n", error);
    return res.status(500).json({ error: "Server Error.", body: null });
  }
};

exports.profile = async (req, res) => {
  try {
    const result = {
      name: req.user.name,
      email: req.user.email,
    };

    return res.status(200).json({
      error: null,
      body: result,
    });
  } catch (error) {
    console.error("Error occured here\n", error);
    return res.status(500).json({ error: "Server Error.", body: null });
  }
};

exports.logout = (req, res) => {
  req.logout();
  return res.status(200).json({ error: null, body: "User Logged Out" });
};
// * End of Controllers ->
