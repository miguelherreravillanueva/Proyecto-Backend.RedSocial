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
            res.status(500).send({ message: 'Error while posting your comment' })
        }
    },

    // async updateCommentById(req, res) {
    //     try {
    //         const comment = await Comment.findByIdAndUpdate(
    //             req.params._id,
    //             { body: req.body.body },
    //             {
    //                 new: true,
    //             }
    //         );
    //         res.send({ message: "Comment successfully updated", comment });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },

}

module.exports = CommentController;
