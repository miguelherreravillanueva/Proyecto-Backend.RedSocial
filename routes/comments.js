const express = require ("express")
const CommentController = require("../controllers/CommentController")
const { authentication } = require("../middlewares/authentication")
const router = express.Router()


router.post("/createComment/:_id",authentication,CommentController.createComment)
// router.put("/updateCommentById/:_id",authentication,CommentController.updatePostById)
// router.delete("/deleteComentById/:_id",authentication,CommentController.deletePostById)
// router.get("/getCommentByTitle/:title",CommentController.getPostByTitle) 

module.exports = router