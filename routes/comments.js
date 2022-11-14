const express = require ("express")
const CommentController = require("../controllers/CommentController")
const { authentication } = require("../middlewares/authentication")
const router = express.Router()


router.post("/createComment/:_id",authentication,CommentController.createComment)

module.exports = router