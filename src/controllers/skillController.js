const Skill = require('./models/skillModel.js');

const createSkill = async (req, res, next) => {
    try {
        const exists = await Skill.findOne({ name:req.body.name });
        if(exists) return res.status(200).json({
            success:true, data:exists
        });
        const skill = await Skill.create(req.body);
        res.status(201).json({
            success:true, data:skill
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getSkills = async (req, res, next) => {
    const skills = await Skill.find().sort({ name:1 });
    res.status(200).json({
        success:true, data:skills
    });
};

module.exports = { createSkill, getSkills };

