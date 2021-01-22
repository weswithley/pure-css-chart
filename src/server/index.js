const dname = 'https://www.metaweather.com/api';
const express = require('express');
const axios = require('axios');
var userObjects = null;


const apiPathEnum = {
  'woeid': (locate) => '/location/search/?query=' + locate,
  'fiveForecast': (woeid) => '/location/' + woeid
}

// const app = express();

// axios.get(dname)
//     .then( res => {
//         userObjects = res.data.results[0];
//     })
//     .catch( error => {
//         console.log('error', error);
//     })

// app.use(express.static('dist'));
// app.get('/api/woeid', (req, res) => {
//         return res.send({ username: userObjects })
//     }
// )

// app.listen(8080, () => console.log('Listening on port 8080!'));