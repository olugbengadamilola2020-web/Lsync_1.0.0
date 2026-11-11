const { body } = require('express-validator');

const updateProfileValidator = [
  body('name').optional().trim().isLength({ min: 2, max: 50 }).withMessage('Name must be 2-50 chars'),
  body('username').optional().trim().isLength({ min: 3, max: 20 }).withMessage('Username 3-20 chars')
    .matches(/^[a-zA-Z0-9_]+$/).withMessage('Username can only contain letters, numbers and underscore'),
  body('bio').optional().trim().isLength({ max: 300 }).withMessage('Bio max 300 chars'),
  body('avatar').optional().isURL().withMessage('Avatar must be valid URL'),
  body('track').optional().isMongoId().withMessage('Invalid track ID')
];

const updatePasswordValidator = [
  body('currentPassword').notEmpty().withMessage('Current password required'),
  body('newPassword').isLength({ min: 6 }).withMessage('New password min 6 chars')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)/).withMessage('New password must contain letter and number'),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.newPassword) throw new Error('Passwords do not match');
    return true;
  })
];

const deleteAccountValidator = [
  body('password').notEmpty().withMessage('Password required to delete account'),
  body('confirmDelete').equals('DELETE').withMessage('You must type DELETE to confirm')
];

const privacyValidator = [
  body('isPublic').isBoolean().withMessage('isPublic must be boolean'),
  body('showStats').optional().isBoolean(),
  body('showPlatforms').optional().isBoolean()
];

const addAccountLinkValidator = [
  body('platformId').isMongoId().withMessage('Valid platform required'),
  body('platformUsername').trim().notEmpty().withMessage('Platform username required'),
  body('profileUrl').optional().isURL().withMessage('Invalid URL')
];

module.exports = {
   updateProfileValidator,
   updatePasswordValidator,
   deleteAccountValidator,
   privacyValidator,
   addAccountLinkValidator   
};