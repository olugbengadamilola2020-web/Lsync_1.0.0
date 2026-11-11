const router = require('express').Router();
const { createPlatform, getMyPlatforms } = require('../controllers/platformController');
const auth = require('../middleware/auth');
const { platformValidator } = require('../validators/logValidator');
const validate = require('../middleware/validate');


router.get('/platform', auth, getMyPlatforms);

router.post('/platform', auth, platformValidator, validate, createPlatform);

module.exports = router;