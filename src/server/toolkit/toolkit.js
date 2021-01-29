// api path enum
const apiFetchEnum = require('../api/apiEnum');

const getFiveDaysForcast = async (cityKeyWord) => {
  const city = await apiFetchEnum['getWoeid'](cityKeyWord);
  const woeid = city.length > 0 ? city[0]['woeid'] : '';
  const cityWithForecast = await apiFetchEnum['getFiveForecast'](woeid);
  return cityWithForecast
}

module.exports = getFiveDaysForcast;