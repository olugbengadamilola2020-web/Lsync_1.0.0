const { body } = require('express-validator');

const registerValidator = [
    body('name').notEmpty().withMessage('Name required'),
    body('username').isLength({min:5}).withMessage('Username min 3 characters')
    .matches(/^[a-z0-9_]+$/).withMessage('Username: lowercase, numbers, underscore'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({min:6}).withMessage('Password min 6 characters')
];

const loginValidator = [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').notEmpty().withMessage('Password required')
];

module.exports = { registerValidator, loginValidator };