import axios from 'axios';

// call back-end to open weather api.
const apiPathEnum = {
  'fiveForecast': (cityKeyWord) => '/api/fiveforecast'
}

export const apiFetchEnum = {
  'getFiveForecast': (cityKeyWord) => {
    return new Promise((resolve, reject) => {
      const data = {
        cityKeyWord
      }
      axios.get(apiPathEnum['fiveForecast'](cityKeyWord), { data })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    });
  }
}

// straight to open weather api ( need resolve CORS ).
// const apiPathEnum = {
//   'woeid': (locate) => 'https://www.metaweather.com/api/location/search/?query=' + locate ,
//   'fiveForecast': (woeid) => 'https://www.metaweather.com/api/location/' + woeid
// }

// export const apiFetchEnum = {
//   'getWoeid': (locate) => {
//     return new Promise((resolve, reject) => {
//       axios.get(apiPathEnum['woeid'](locate))
//         .then((res) => resolve(res.data))
//         .catch((err) => reject(err))
//     });
//   },
//   'getFiveForecast': (woeid) => {
//     return new Promise((resolve, reject) => {
//       axios.get(apiPathEnum['fiveForecast'](woeid))
//         .then((res) => resolve(res.data))
//         .catch((err) => reject(err))
//     });
//   }
// }