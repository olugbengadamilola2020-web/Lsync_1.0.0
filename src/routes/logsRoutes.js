const router = require('express').Router();
const { createLog, getMyLogs, deleteLog } = require('../controllers/logController');
const auth = require('../middleware/auth');
const { logValidator } = require('../validators/logValidator');
const validate = require('../middleware/validate');


router.post('/log', auth, logValidator, validate, createLog);

router.get('/log', auth, getMyLogs);

router.delete('/log/:id', auth, deleteLog);

module.exports = router;