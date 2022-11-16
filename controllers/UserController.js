const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserController = {
  async createUser(req, res, next) {
    try {
      let password;
      if (req.body.password) {
        password = await bcrypt.hash(
          req.body.password,
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
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      if (user.tokens.length > 4) user.tokens.shift();
      user.tokens.push(token);
      await user.save();
      res.send({ msg: 'Welcome ' + user.name, token });
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
      res.send({ msg: "Successfully disconnected" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Error while disconnecting",
      });
    }
  },

  async getInfoUser(req, res) {
    try {
      const user = await User.findById(req.user._id).populate({
        path: "commentIds",
        populate: {
          path: "postIds",
        },
      });
      res.send(user);
    } catch (error) {
      console.error(error);
    }
  },

  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params._id);
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Error while getting the user",
        error,
      });
    }
  },

  async getUserByName(req, res) {
    try {
        const users = await User.find({
            $text: {
                $search: req.params.name,
            },
        });
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "Error while getting the user",
            error,
        });
    }
},

}

module.exports = UserController