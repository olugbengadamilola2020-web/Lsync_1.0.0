const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        reqiured: true,
        unique: true,
    },
    category: String,
}, { timestamps: true});

Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;


