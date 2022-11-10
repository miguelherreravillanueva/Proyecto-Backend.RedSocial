const Post = require("../models/Post");

const PostController = {
    async createPost(req, res) {
        try {
            const post = await Post.create({ ...req.body });
            res.status(201).send(post);
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Error while posting' })
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
    },

    async getPostByTitle(req, res) {
        try {
            const posts = await Post.find({
                $text: {
                    $search: req.params.title,
                },
            });
            res.send(posts);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                msg: "Error while getting the post",
                error,
            });
        }
    },

    async getPostById(req, res) {
        try {
          const post = await Post.findById(req.params._id);
          res.send(post);
        } catch (error) {
          console.error(error);
          res.status(500).send({
            msg: "Error while getting the post",
            error,
          });
        }
      },
}

module.exports = PostController;
