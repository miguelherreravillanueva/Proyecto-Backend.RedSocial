const Post = require("../models/Post");



const PostController = {
    async createPost(req, res) {
        try {
            const post = await Post.create({ ...req.body });
            res.status(201).send(post);
        } catch (error) {
            console.error(error)
            res.status(400).send(error)
        }
    },

    async updatePostById(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            );
            res.send({ message: "Post successfully updated", post });
        } catch (error) {
            console.error(error);
        }
    },

    async deletePostById(req, res) {
        try {
            const post = await Post.findByIdAndDelete(req.params._id);
            res.send({ post, message: "Post deleted" });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "There was a problem while deleting post",
            });
        }
    }
}

module.exports = PostController;
