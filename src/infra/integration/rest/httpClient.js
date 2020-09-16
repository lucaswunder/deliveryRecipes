const axios = require('axios');

module.exports = (ctx) => (url) => {
  return axios.create({
    baseURL: url,
    timeout: 1000,
  });
}
