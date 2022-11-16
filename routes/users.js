const express = require("express");
const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/authentication");
const router = express.Router()

router.post("/createUser",UserController.createUser)
router.post("/loginUser",UserController.loginUser)
router.delete("/logoutUser",authentication, UserController.logoutUser)
router.get("/getInfoUser",authentication,UserController.getInfoUser) 
router.get("/getUserById/:_id",UserController.getUserById)
router.get("/getUserByName/:name",UserController.getUserByName)
router.get("/followUser/:_id",authentication,UserController.followUser)

module.exports = router;