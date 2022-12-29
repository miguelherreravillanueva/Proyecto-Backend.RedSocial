const Comment = require("../models/Comment.js");
const Post = require("../models/Post.js");
const User = require("../models/User.js");

const CommentController = {
    async createComment(req, res) {
        try {
            const comment = await Comment.create({ ...req.body, userId: req.user._id });
            await Post.findByIdAndUpdate(req.params._id, {
                $push: { commentId: req.user._id }
            })
            await User.findByIdAndUpdate(req.user._id, {
                $push: { commentId: comment._id }
            })
            res.status(201).send({ msg: "Comment succesfully created", comment });
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: 'Error while posting your comment' })
        }
    },

    async updateCommentById(req, res) {
        try {
            const comment = await Comment.findByIdAndUpdate(
                req.params._id,
                { body: req.body.body },
                {
                    new: true,
                }
            );
            res.send({ msg: "Comment successfully updated", comment });
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: 'Error while updating your comment' })
        }
    },

    async getComments(req, res) {
        try {
            const comments = await Comment.find()
            res.send({ msg: "Here are the comments", comments });
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: 'Error while getting the comments' })
        }
    },

    async deleteCommentById(req, res) {
        try {
            const comment = await Comment.findByIdAndDelete(req.params._id);
            res.send({ msg: "Comment deleted", comment });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                msg: "There was a problem while deleting your comment",
            });
        }
    },

    async likeComment(req, res) {
        try {
            const comment = await Comment.findByIdAndUpdate(
                req.params._id,
                { $push: { likes: req.user._id } },
                { new: true }
            );
            res.send({ msg: "Comment liked", comment });
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: "There was a problem with your like" });
        }
    },

    async deleteLikeComment(req, res) {
        try {
            const comment = await Comment.findByIdAndUpdate(
                req.params._id,
                { $pull: { likes: req.user._id } },
                { new: true }
            );
            await User.findByIdAndUpdate(req.user._id, { new: true });
            res.send({ comment, msg: "Comment disliked" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: "There was a problem while dropping your like" });
        }
    },
}

module.exports = CommentController;
