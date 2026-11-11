const router = require('express').Router();
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const { getMe, updateProfile, updatePassword, updatePrivacy, addPlatformAccount, removePlatformAccount, deleteAccount } = require('../controllers/userController');
const { updateProfileValidator, updatePasswordValidator, deleteAccountValidator, privacyValidator, addAccountLinkValidator } = require('../validators/userValidator');

router.get('/me', auth, getMe);

router.put('/profile', auth, updateProfileValidator, validate, updateProfile);

router.put('/password', auth, updatePasswordValidator, validate, updatePassword);

router.put('/privacy', auth, privacyValidator, validate, updatePrivacy);

router.post('/accounts', auth, addAccountLinkValidator, validate, addPlatformAccount);

router.delete('/accounts/:accountId', auth, removePlatformAccount);

router.delete('/delete', auth, deleteAccountValidator, validate, deleteAccount);

module.exports = router;