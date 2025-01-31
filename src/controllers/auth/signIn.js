const bcryct = require("bcrypt");
const User = require("../../models/auth");
const { createToken } = require("../../utils");

const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcryct.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = createToken(user._id);

  return res.status(200).json({
    token,
    user: {
      _id: user._id,
      email: user.email,
      username: user.username,
    },
  });
};

module.exports = { signIn };
