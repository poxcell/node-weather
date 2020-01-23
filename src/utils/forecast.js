const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = 'https://api.darksky.net/forecast/5f1eaf45068b06b8bd321c16e1752c94/' + longitude + ',' + latitude+'?units=si'
  request({url,json: true}, (error, {body}) => {
    if (error) {
      callback('unable to connect to forecast services', undefined)
    } else if (body.error) {
      callback('unable to find location')
    } else {
      callback(undefined, body.daily.data[0].summary+' it is currently ' + body.currently.temperature + ' degrees out. there is a ' + body.currently.precipProbability + '% chance of rain')
    }
  })
}
module.exports = forecast