const express = require ("express")
const CommentController = require("../controllers/CommentController")
const { authentication } = require("../middlewares/authentication")
const router = express.Router()


router.post("/createComment/:_id",authentication,CommentController.createComment)
router.put("/updateCommentById/:_id",authentication,CommentController.updateCommentById)
router.get("/getComments",CommentController.getComments) 
router.delete("/deleteCommentById/:_id",authentication,CommentController.deleteCommentById)

module.exports = router