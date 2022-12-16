const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please, enter a title."],
    },
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
    likes: [{ type: ObjectId }],
   
}, { timestamps: true });

PostSchema.index({
    title: "text",
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;