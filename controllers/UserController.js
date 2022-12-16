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
      const user = await User.create({ ...req.body, password, role:"user" });
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
      res.send({ msg: 'Welcome ' + user.name, token, user });
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
      res.send({ msg: "Here is the info of the user", user });
    } catch (error) {
      console.error(error);
    }
  },

  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params._id);
      res.send({ msg: "Here you have the user", user });
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
      res.send({ msg: "Here you have the users", users });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Error while getting the user",
        error,
      });
    }
  },

  async followUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params._id,
        { $push: { followers: req.user._id } },
        { new: true }
      );
      await User.findByIdAndUpdate(
        req.user._id,
        { $push: { following: req.params._id } },
        { new: true }
      );
      res.send({ msg: "You have followed the user", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "There was a problem following the user" });
    }
  },

  async unfollowUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params._id,
        { $pull: { followers: req.user._id } },
        { new: true }
      );
      await User.findByIdAndUpdate(
        req.user._id,
        { new: true }
      );
      res.send({ msg: "You have unfollowed the user", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "There was a problem while unfollowing your like" });
    }
  },

  async getAllUsers(req, res) {
    try {
         const users = await User.find()
        .populate("postIds")
        .populate("followers")
        res.send({ msg: "Here are your users", users });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: 'Error while getting the users' })
    }
  },
}

module.exports = UserController