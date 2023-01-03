const axios = require('axios');
const apiPathList = require('./apiPathList.js');
const { apiKey } = require('../config/index.js');

const apiFetcher = {
  'getFiveForecast': () => {
    const path = apiPathList['fiveForecast'];
    const params = {
      key: apiKey,
      q: 'Taiwan',
      days: '5',
      aqi: 'no',
      alerts: 'no'
    }

    return new Promise((resolve, reject) => {
      axios.get(path, { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        })
    });
  }
}

module.exports = apiFetcher;