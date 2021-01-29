// toolkit
const getFiveDaysForcast = require('./toolkit/toolkit.js');
const express = require('express');
const app = express();


app.use(express.static('bundle'));
app.get('/api/fiveforecast', async (req, res) => {
  console.log('req-', req);
  const cityWithForecast = await getFiveDaysForcast('taipei');
  console.log('api/forecast-', cityWithForecast);
  return res.send(cityWithForecast);
})

app.listen(8080, () => console.log('Listening on port 8080!'));