const { Router } = require('express');

const { getCurrencies, getQueryParams } = require('../API');

const router = Router();

router.get('/', async (req, res) => {
  const query = getQueryParams(req.query);

  const { data: currencies } = await getCurrencies(query);

  res.json({
    ...query,
    currencies,
  });
});

module.exports = {
  router,
  path: '/currencies',
};
