const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
   },
   title: {
    type: String,
    required: true
   },
   description: String,
   skillsUsed: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill'
   }],
   githubLink: String,
   liveLink: String,
   date: {
    type: Date,
    default: Date.now
   },
}, { timestamps: true });

Project: mongoose.model('Project', ProjectSchema);

module.exports = Project;