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
        required: [true, "Please, fill your email."],
    },
    password: {
        type: String,
        required: [true, "Please, fill your password."],
    },
    tokens: [],
    commentIds: [{
        type: ObjectId,
        ref: "Comment"
    }],
    postIds: [{
        type: ObjectId,
        ref: "Post"
    }],
    followers: [{
        type: ObjectId,
        ref: 'User'
    }],
    following: [{
        type: ObjectId,
        ref: 'User'
    }],

}, { timestamps: true });

UserSchema.methods.toJSON = function () {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    return user;
}

UserSchema.index({
    name: "text",
});

const User = mongoose.model('User', UserSchema);

module.exports = User;