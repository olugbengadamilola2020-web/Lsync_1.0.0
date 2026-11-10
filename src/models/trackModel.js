const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: String,
    category: {
        type: String,
        valid: ['Tech', 'Design', 'Business', 'Trade', 'Health', 'Engineering', 'Education', 'Architecture', 'Environment', 'Other'],
        default: " "
    },
    requiredSkils: String,
    estimatedHours: {
        type: Number,
        default: " "
    }, 
 }, { timestamps: true });

    Track = mongoose.model('Track', TrackSchema);

    module.exports = Track;

    