const express = require('express');
const app = express();
const middleWarePort = process.env.PORT || 8080;
const { apiKey } = require('./config/index.js');

const { routers } = require('./apiService/index.js');

app.use(express.static('bundle'));

app.use('/', (req, res, next) => {
  if(!apiKey) return res.status(401).send("You don't have any API key.");
  next();
});

app.get('/api/getWeatherForecast', async (req, res) => {
  let result = null;

  try{
    const forecaster = await routers['getWeatherForecast']();
    result = res.status(200).send(forecaster);
  }catch(err){
    result = res.status(401).send(err);
  }

  return result;
})

app.listen(middleWarePort, () => console.log(`Listening on ${middleWarePort}`));