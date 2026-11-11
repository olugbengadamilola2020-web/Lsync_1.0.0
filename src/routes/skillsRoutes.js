const router = require('express').Router();
const { createSkill, getSkills } = require('../controllers/skillController');
const auth = require('../middleware/auth');
const { skillValidator } = require('../validators/logValidator');
const validate = require('../middleware/validate');


router.get('/skill', getSkills);

router.post('/skill', auth, skillValidator, validate, createSkill);

module.exports = router;