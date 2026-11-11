const Track = require('./models/Track');

const createTrack = async (req, res, next) => {
    try {
        const track = await Track.create(req.body);
        res.status(201).json({
            success:true, data:track
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getTracks = async (req, res, next) => {
    const tracks = await Track.find().sort({ createdAt:-1 });
    res.status(200).json({
        success:true, data:tracks
    });
};

module.exports = { createTrack, getTracks };

