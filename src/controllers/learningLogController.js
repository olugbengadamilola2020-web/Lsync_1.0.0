const LearningLog = require('./models/learningLogModel.js');

const createLog = async (req, res, next) => {
    try {
        const log = await LearningLog.create({ ...req.body, user: req.user });
        const populated = await log.populate(['skill', 'platform', 'track']);
        res.status(201).json({
            success:true, data:populated
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getMyLogs = async (req, res, next) => {
    const logs = await LearningLog.find({ user: req.user }).populated(['skill', 'platform', 'track']).sort({ date:-1 });
    res.status(200).json({
        success:true, data:logs
    });
};

const deleteLog = async (req, res, next) => {
    const log = await LearningLog.findOneAndDelete({ _id: req.params.id, user: req.user });
    if(!log) return res.status(404).json({
        message: 'Not found'
    });
    res.status({ success:true });
};

module.exports = { createLog, getMyLogs, deleteLog };

