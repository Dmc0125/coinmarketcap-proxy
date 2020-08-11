const { Router } = require('express');

const { getCurrencies, getQueryParams } = require('../API');

const router = Router();

router.get('/', async (req, res) => {
  const query = getQueryParams(req.query);

  const { data } = await getCurrencies(query);

  const biggestMovers = data.sort((a, b) => (
    Math.abs(b.quote.USD.percent_change_24h) - Math.abs(a.quote.USD.percent_change_24h)
  ));

  res.json({
    ...query,
    biggestMovers,
  });
});

module.exports = {
  router,
  path: '/biggest-movers',
};
