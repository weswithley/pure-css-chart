const uri = 'https://api.weatherapi.com/v1/current.json'

const paths = {
  'weatherForecast': ({ key, city, airQuality }) => `${uri}?key=${key}&q=${city}&aqi=${airQuality}`
}

module.exports = paths;