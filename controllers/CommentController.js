const Comment = require("../models/Comment.js");
const Post = require("../models/Post.js");


//FALTA QUE SEA EN UN DETERMINADO POST

const CommentController = {
    async createComment(req, res) {
        try {
            const comment = await Comment.create({ ...req.body, userId: req.user._id });
            await Post.findByIdAndUpdate(req.params._id,{
                $push: {commentId:req.user._id}
            })
            res.status(201).send(comment);
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Error while posting your comment' })
        }
    },
}

module.exports = CommentController;
