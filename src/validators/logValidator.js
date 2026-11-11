const { body } = require('express-validator');

const logValidator = [
    body('title').notEmpty().withMessage('Title required'),
    body('durationMinutes').isFloat({gt:0}).withMessage('Duration must be >0'),
    body('proofUrl').optional().isURL().withMessage('Proof must be valid Url')
];

const trackValidator = [
    body('name').notEmpty().withMessage('Track name required')
];

const skillValidator = [
    body('name').notEmpty().withMessage('Skill name is required')
];

const platformValidator = [
    body('name').notEmpty().withMessage('Platform name is required'),
    body('type').isIn(['Youtube', 'Udemy', 'Coursera', 'GitHub', 'Blogs', 'Book', 'edX', 'Other']).withMessage('Invalid platform type')
];

const projectValidator = [
    body('title').notEmpty().withMessage('Title is required')
];

module.exports = {
    logValidator,
    trackValidator,
    skillValidator,
    platformValidator,
    projectValidator
};