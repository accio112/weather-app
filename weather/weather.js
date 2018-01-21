const request = require('request');

var getWeather = (lat, long , callback) =>{
    request({
        url:`https://api.darksky.net/forecast/809a1de764b35e25b71a1c983206c72a/${lat},${long}`,
        json: true
    },(error,response,body) =>{
        if(error){
            callback('Unable to connect to the server');
        }

        else if(!error && response.statusCode === 200) {
        callback(undefined,{
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        })
        }
        else{
        callback('Unable to fetch weather');
        }

});
};

module.exports.getWeather = getWeather;