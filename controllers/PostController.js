const Post = require("../models/Post");
const User = require("../models/User.js");

const PostController = {
    async createPost(req, res, next) {
        try {
            const post = await Post.create({ ...req.body, userId: req.user._id });
            await User.findByIdAndUpdate(req.user._id, {
                $push: { postIds: post._id }
            })
            res.status(201).send({ msg: "Post successfully created", post });
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: "Error while creating the post" });
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
            res.send({ msg: "Post successfully updated", post });
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: "Error while updating the post" });
        }
    },

    async deletePostById(req, res) {
        try {
            const post = await Post.findByIdAndDelete(req.params._id);
            res.send({ msg: "Post deleted", post });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                msg: "There was a problem while deleting your post",
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
            res.send({ msg: "Here is your posts", posts });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                msg: "Error while getting the posts",
                error,
            });
        }
    },

    async getPostById(req, res) {
        try {
            const post = await Post.findById(req.params._id)
            .populate("commentId")
            .populate("userId")
            res.send({ msg: "Here is your post", post });
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
        res.send({ msg: "Post liked", post });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "There was a problem with your like" });
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
        res.send({ post, msg: "Like dropped" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "There was a problem while dropping your like" });
    }
},

    async getAllPosts(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;
        const posts = await Post.find()
            .populate("commentId")
            .populate("userId")
        // .limit(limit)
        // .skip((page - 1) * limit);
        res.send({ msg: "Here are the posts", posts });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: 'Error while getting the posts' })
    }
},
}

module.exports = PostController;
