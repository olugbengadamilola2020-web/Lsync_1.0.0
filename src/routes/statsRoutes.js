const router = require('express').Router();
const { getMyStats } = require('../controllers/statsController');
const auth = require('../middleware/auth');

router.get('/myStats', auth, getMyStats);

module.exports = router;