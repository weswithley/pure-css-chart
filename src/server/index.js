const express = require('express');
const app = express();
const middleWarePort = process.env.PORT || 8080;

const { apiFetcher } = require('./apiService/index.js');

app.use(express.static('bundle'));

app.get('/api/fiveforecast', async (req, res) => {
  let response = null;
  try{
    response = await apiFetcher['getFiveForecast']();
  }catch(err){
    response = err;
  }

  return res.send(response);
})

app.listen(middleWarePort, () => console.log(`Listening on ${middleWarePort}`));