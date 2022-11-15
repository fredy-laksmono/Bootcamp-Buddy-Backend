const { User } = require("../models");
const middleware = require("../middleware");

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    });
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
        firstName: user.firstName
      };
      let token = middleware.createToken(payload);
      return res.send({ user: payload, token });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized Request." });
  } catch (error) {
    throw error;
  }
};

const Register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    let passwordDigest = await middleware.hashPassword(password);
    console.log(passwordDigest);
    const user = await User.create({
      email,
      passwordDigest,
      firstName,
      lastName
    });
    res.send(user);
    // res.send({ status: "Success", msg: "Register called!" });
  } catch (error) {
    throw error;
  }
};

const UpdatePassword = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email }
    });
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword);
      await user.update({ passwordDigest });
      return res.send({ status: "Success", msg: "Password updated!" });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized request." });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Login,
  Register,
  UpdatePassword
};
