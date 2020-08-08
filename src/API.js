/* eslint-disable import/prefer-default-export */
const fetch = require('node-fetch');

const API_KEY = process.env.CMC_API_KEY;
const API_URL = 'https://pro-api.coinmarketcap.com';

const headers = {
  'X-CMC_PRO_API_KEY': API_KEY,
};

const getCurrencies = async ({ start, limit }) => {
  const res = await fetch(`${API_URL}/v1/cryptocurrency/listings/latest?start=${start || 1}&limit=${limit || 100}`, {
    headers,
  });

  const json = await res.json();

  return json;
};

module.exports = {
  getCurrencies,
};
