const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/keys.js");

const UserController = {
  async createUser(req, res, next) {
    try {
      let password;
      if(req.body.password){
        password = await bcrypt.hash(
          req.body.password ,
          10
        );
      }
      const user = await User.create({ ...req.body, password });
      res.status(201).send({ msg: "User succesfully created", user });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async loginUser(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      });
      if (!user) {
        return res.status(400).send("Incorrect user or password");
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).send("Incorrect user or password");
      }
      const token = jwt.sign({ _id: user._id }, jwt_secret);
      if (user.tokens.length > 4) user.tokens.shift();
      user.tokens.push(token);
      await user.save();
      res.send({ message: 'Welcome ' + user.name, token });
    } catch (error) {
      console.error(error);
      res.status(500).send(error)
    }
  },

  async logoutUser(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });
      res.send({ message: "Successfully disconnected" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error while disconnecting",
      });
    }
  },

  async getInfoUser(req, res) {
    try {
      const user = await User.findById(req.user._id).populate({
        populate: {
         path: "postIds",
       },
     });
      res.send(user);
    } catch (error) {
      console.error(error);
    }
  },
}

module.exports = UserController