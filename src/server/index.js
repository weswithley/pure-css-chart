// toolkit
const getFiveDaysForcast = require('./toolkit/toolkit.js');
const express = require('express');
const app = express();
const middleWarePort = process.env.PORT || 8080;


app.use(express.static('bundle'));
app.get('/api/fiveforecast', async (req, res) => {
  const cityWithForecast = await getFiveDaysForcast('taipei');
  return res.send(cityWithForecast);
})

app.listen(middleWarePort, () => console.log(`Listening on ${middleWarePort}`));