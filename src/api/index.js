const express = require('express');

const currencies = require('./currencies');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/currencies', currencies);

module.exports = router;
