const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please, fill your name."],
      },
      email: {
        type: String,
        match: [/.+\@.+\..+/, "This type of email is not correct."],
       unique: true,
        required: [true, "Please, fill ypur email."],
      },
      password: {
        type: String,
        required: [true, "Please, fill your password."],
      },
      tokens:[],
    commentIds: [{ type: ObjectId, ref: "Comment" }],
    wishList: [{ type: ObjectId, ref: 'Post' }],
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;