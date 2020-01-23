const request = require('request')

const geocode = (address, callback)=>{
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicG94Y2VsbCIsImEiOiJjazVkZHlwOHAxdXpiM3JvNm1wbTV1OGg3In0.GKSnYf_iJAX8yyHMSVmbRA&limit=1'
  request({url, json: true},(error, {body}) => {
    if(error){
      callback('unable to connect to location services', undefined)
    } else if(body.features.length === 0){
      callback('unable to find location. try another search', undefined)
    }else{
      callback(undefined,{
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode