const Post = require("../models/Post");
const User = require("../models/User.js");

const PostController = {
    async createPost(req, res, next) {
        try {
            const post = await Post.create({ ...req.body, userId: req.user._id });
            await User.findByIdAndUpdate(req.user._id, {
                $push: { postIds: post._id }
            })
            res.status(201).send(post);
        } catch (error) {
            console.error(error)
            next(error)
        }
    },

    async updatePostById(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                { title: req.body.title, body: req.body.body },
                {
                    new: true,
                }
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

    async likePost(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                { $push: { likes: req.user._id } },
                { new: true }
            );
            res.send(post);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem with your like" });
        }
    },

    async deleteLikePost(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                { $pull: { likes: req.user._id } },
                { new: true }
            );
            await User.findByIdAndUpdate(req.user._id, { new: true });
            res.send({ post, message: "Like dropped" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem while dropping your like" });
        }
    },

    async getAllPosts(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const post = await Post.find()
                .populate("commentId")
                .populate("userId")
                .limit(limit)
                .skip((page - 1) * limit);
            res.send(post);
        } catch (error) {
            console.error(error);
        }
    },
}

module.exports = PostController;
