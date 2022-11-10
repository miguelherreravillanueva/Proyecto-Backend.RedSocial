const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/keys.js");

const UserController = {
    async createUser(req, res, next) {
        try {
            const password = await bcrypt.hash(req.body.password, 10);
            const user = await User.create({ ...req.body, password });
            res.send(user);
        } catch (error) {
            console.error(error)
            next(error)
        }
    },

    loginUser(req, res) {
        User.findOne({
          where: {
            email: req.body.email,
          },
        }).then((user) => {
          if (!user) {
            return res
              .status(400)
              .send({ message: "Incorrect user or password" });
          }
          const isMatch = bcrypt.compareSync(req.body.password, user.password);
          if (!isMatch) {
            return res
              .status(400)
              .send({ message: "Incorrect user or password" });
          }
          const token = jwt.sign({ id: user.id }, jwt_secret);
        //   Token.create({ token, UserId: user.id });
          res.send({ message: "Wellcome " + user.name, user, token });
        });
      },
}

module.exports = UserController