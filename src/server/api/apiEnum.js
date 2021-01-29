const axios = require('axios');

const apiPathEnum = {
  'woeid': (locate) => 'https://www.metaweather.com/api/location/search/?query=' + locate ,
  'fiveForecast': (woeid) => 'https://www.metaweather.com/api/location/' + woeid
}

const apiFetchEnum = {
  'getWoeid': (city) => {
    return new Promise((resolve, reject) => {
      axios.get(apiPathEnum['woeid'](city))
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    });
  },
  'getFiveForecast': (woeid) => {
    return new Promise((resolve, reject) => {
      axios.get(apiPathEnum['fiveForecast'](woeid))
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    });
  }
}

module.exports = apiFetchEnum;