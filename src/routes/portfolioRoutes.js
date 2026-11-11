const router = require('express').Router();
const { getPublicPortfolio } = require('../controllers/portfolioController');

router.get('/:username', getPublicPortfolio);

module.exports = router;