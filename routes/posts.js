const express = require ("express")
const PostController = require("../controllers/PostController")
const { authentication } = require("../middlewares/authentication")
const router = express.Router()

router.post("/createPost",authentication, PostController.createPost)
router.put("/updatePostById/:_id",authentication,PostController.updatePostById)
router.delete("/deletePostById/:_id",authentication,PostController.deletePostById)
router.get("/getPostByTitle/:title",PostController.getPostByTitle) 
router.get("/getPostById/:_id",PostController.getPostById)
router.put('/likes/:_id', authentication, PostController.likePost);
router.put('/deleteLikes/:_id', authentication, PostController.deleteLikePost);
router.get('/getAllPosts', PostController.getAllPosts);


module.exports = router