const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
skill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill'
},
platform: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Platform'
},
track: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Track'
},
title: {
    type: String,
    required: true
},
description: String,
durationMinutes: {
    type: Number,
    required: true
},
type: {
    type: String,
    enum: ['Video', 'Reading', 'Coding', 'Project', 'Practice', 'Certificate'],
    default: " "
},
proofUrl: String,
date: {
    type: Date,
    default: Date.now
},
}, { timestamps: true });

LearningLog = mongoose.model('LearningLog', LogSchema );

module.exports = LearningLog;

