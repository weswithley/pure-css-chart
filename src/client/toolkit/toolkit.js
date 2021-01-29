// api path enum
import { apiFetchEnum } from '../api/apiEnum';

export const organizePeriodList = (start, end) => {
  let periodList = [];
  for (let i = start; i < end + 10; i += 10) {
    periodList.unshift(i);
  }
  return periodList
};

export const transformUnit = (unit) => {
  let resultUnit = null;
  switch (unit) {
    case 'temperature':
      resultUnit = '\u2103';
      break;
    case 'percentage':
      resultUnit = '%';
      break;
  }
  return resultUnit
}

export const getFiveDaysForcast = async (cityKeyWord) => {
  const cityWithForecast = await apiFetchEnum['getFiveForecast'](cityKeyWord);
  return cityWithForecast
}

// export const getFiveDaysForcast = async (cityKeyWord) => {
//   const city = await apiFetchEnum['getWoeid'](cityKeyWord);
//   const woeid = city.length > 0 ? city[0]['woeid'] : '';
//   const cityWithForecast = await apiFetchEnum['getFiveForecast'](woeid);
//   return cityWithForecast
// }