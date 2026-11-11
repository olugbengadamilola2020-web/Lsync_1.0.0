const Learninglog = require('./models/learningLogModel.js');

const getMyStats = async (req, res, next) => {
    try {
        const logs = await Learninglog.find({ user: req.user })
            .populate('platform')
            .populate('track')
            .populate('skill');

        let totalMinutes = 0;
        const byPlatform = {};
        const byType = {};

        logs.forEach((log) => {
            totalMinutes += Number(log.durationMinutes) || 0;

            const pName = log.platform && log.platform.name ? log.platform.name : 'Other';
            byPlatform[pName] = (byPlatform[pName] || 0) + (Number(log.durationMinutes) || 0);

            const type = log.type || 'Unknown';
            byType[type] = (byType[type] || 0) + 1;
        });

        res.status(200).json({
            success: true,
            data: {
                totalLogs: logs.length,
                totalHours: (totalMinutes / 60).toFixed(1),
                byPlatform,
                byType
            }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = getMyStats;
