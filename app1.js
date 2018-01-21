const request = require('request');
const yargs = require('yargs');

const argv= yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address to fetch for weather for',
            string: true,
        }
    })
    .help()
    .alias('help','h')
    .argv;
console.log(argv);
var encodedAddress = encodeURIComponent(argv.address);

request({
    url:`http://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
},(error,response,body)=>{
    console.log(`Address:${body.results[0].formatted_address}`);
console.log(`Longitude:${body.results[0].geometry.location.lat}`);
console.log(`Latitude:${body.results[0].geometry.location.lng}`);
})
