const { Router } = require('express');
// const monk = require('monk');

const { getQueryParams, getCurrencies, getMetadata } = require('../API');

const router = Router();

// const db = monk(process.env.NODE_ENV ? 'localhost/cmc-proxy' : process.env.MONGO_URI);
// const logosDB = db.get('logos');

router.get('/', async (req, res, next) => {
  const query = getQueryParams(req.query);
  let { symbols } = req.query;

  try {
    if (!symbols || (symbols && !symbols.length)) {
      const { data: currencies } = await getCurrencies(query);
      symbols = currencies.map(({ symbol }) => symbol);
    }
  } catch (err) {
    next(err);
    return;
  }

  const { data } = await getMetadata(symbols);
  const logos = symbols.reduce((acc, symbol) => {
    acc[symbol] = data[symbol].logo;
    return acc;
  }, {});

  res.json({
    ...query,
    logos,
  });
});

module.exports = {
  router,
  path: '/logos',
};
