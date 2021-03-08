// * Models
const User = require("./model");

// * Controllers ->
exports.profile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    if (!user)
      return res.status(404).json({
        error: "User not found",
        body: null,
      });

    const result = {
      name: user.name,
      email: user.email,
      server: "secondaryServer",
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

// * End of Controllers ->
