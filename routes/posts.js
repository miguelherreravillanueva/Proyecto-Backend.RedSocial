const express = require ("express")
const PostController = require("../controllers/PostController")
const router = express.Router()

router.post("/createPost",PostController.createPost)
router.put("/updatePostById/:_id",PostController.updatePostById)
router.delete("/deletePostById/:_id",PostController.deletePostById)



module.exports = router