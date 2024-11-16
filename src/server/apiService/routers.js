const axios = require('axios');
const paths = require('./paths.js');
const { apiKey } = require('../config/index.js');


const routers = {
  'getWeatherForecast': () => {
    const params = {
      key: apiKey,
      city: 'Taipei',
      airQuality: 'yes'
    }

    const path = paths['weatherForecast'](params);

    return new Promise((resolve, reject) => {
      axios.get(path)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    });
  }
}

module.exports = routers;