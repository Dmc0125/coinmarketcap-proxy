const { Router } = require('express');

const { getCurrencies } = require('../API');

const router = Router();

router.get('/', async (req, res) => {
  const { start, limit } = req.query;

  const currencies = await getCurrencies({
    start,
    limit,
  });

  res.json({
    currencies,
  });
});

module.exports = router;
