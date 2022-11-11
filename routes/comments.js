const express = require ("express")
const CommentController = require("../controllers/CommentController")
const { authentication, isAdmin } = require("../middlewares/authentication")
const router = express.Router()


router.post("/createComment",authentication,isAdmin,CommentController.createComment)

module.exports = router