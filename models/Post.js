const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
   
    body: {
        type: String,
        required: [true, "Please, write something down."],
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    commentId:[{
        type: ObjectId,
        ref: 'Comment'
    }],
    likes: [{ type: ObjectId, ref: "User" }],
   
}, { timestamps: true });

PostSchema.index({
    title: "text",
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;