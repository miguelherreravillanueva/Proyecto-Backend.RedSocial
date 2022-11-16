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
router.put("/followUser/:_id",authentication,UserController.followUser)
router.put("/unfollowUser/:_id",authentication,UserController.unfollowUser)
router.get('/getAllUsers', authentication, UserController.getAllUsers);


module.exports = router;