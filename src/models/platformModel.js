const mongoose = require('mongoose');

const platformSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        valid: ['Youtube', 'Udemy', 'Coursera', 'GitHub', 'Blogs', 'Book', 'edX', 'Other'],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true });

Platform = mongoose.model('Platform', platformSchema);

module.exports = Platform;