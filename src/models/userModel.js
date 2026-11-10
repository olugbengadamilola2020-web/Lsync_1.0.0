const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        reqiured: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    bio: {
        type: String,
        default: " "
    },
    location: String,
    avatar: String,
    currentRole: {
        type: String,
        default: " "
    },
    targetRole: {
        type: String,
        default: " "
    },
    track: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Track'
    },
    isPublic: {
        type: Boolean,
        default: true
    },
  },  { timestamps: true });

    User = mongoose.model('User', UserSchema);

    module.exports = User;