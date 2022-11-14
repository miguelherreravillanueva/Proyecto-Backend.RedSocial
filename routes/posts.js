const express = require ("express")
const PostController = require("../controllers/PostController")
const { authentication, isAdmin, isAuthor } = require("../middlewares/authentication")
const router = express.Router()

router.post("/createPost",authentication, PostController.createPost)
router.put("/updatePostById/:_id",authentication,isAuthor,PostController.updatePostById)
router.put("/updatePostById/admin/:_id",authentication,isAdmin,PostController.updatePostById)
router.delete("/deletePostById/:_id",authentication,isAdmin,PostController.deletePostById)
router.get("/getPostByTitle/:title",PostController.getPostByTitle) 
router.get("/getPostById/:_id",PostController.getPostById)
router.put('/likes/:_id', authentication, PostController.likePost);
// router.delete('/dropLikes/:_id', authentication, PostController.dropLikePost);
router.get('/getAllPosts', authentication, PostController.getAllPosts);


module.exports = router