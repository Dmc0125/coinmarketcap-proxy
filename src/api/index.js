const express = require('express');

const currencies = require('./currencies');
const biggestMovers = require('./biggest-movers');
const logos = require('./logos');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Coinmarketcap proxy API',
  });
});

router.use(currencies.path, currencies.router);
router.use(biggestMovers.path, biggestMovers.router);
router.use(logos.path, logos.router);

module.exports = router;
