const axios = require('axios');

module.exports = () => (url) => {
  return axios.create({
    baseURL: url,
    timeout: 1000,
  });
}
