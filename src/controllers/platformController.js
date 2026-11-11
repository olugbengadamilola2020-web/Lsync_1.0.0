const Platform = require('./models/platformModel/js');

const createPlatform = async (req, res, next) => {
    try {
        const data = { ...req.body, user: req.user };
        const platform = await Platform.create(data);
        res.status(201).json({
            success:true, data:platform 
        });
} catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getMyPlatforms = async (req, res, next) => {
    const platforms = await Platform.find({ user: req.user });
    res.status(201).json({
        success:true, data:platforms
    }); 
};

module.exports = { createPlatform, getMyPlatforms };

