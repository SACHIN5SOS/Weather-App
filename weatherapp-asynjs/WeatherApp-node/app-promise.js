
const axios = require('axios');
const yargs = require('yargs');
const argv= yargs
.options({
    a: {
        demand : true,
        alias: 'address',
        describe: 'Adress to fetch wether to',
        string: true
    }
})
.help()
.alias('help','h')
.argv;

var encodedAddress= encodeURIComponent(argv.address);
var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress;

axios.get(geocodeUrl).then((response)=>{
  if(response.data.status==='ZERO_RESULTS'){
    throw new Error('Unable to track this location');
  }
  // console.log(response.data);
  var lat=response.data.results[0].geometry.location.lat;
  var long=response.data.results[0].geometry.location.lng;
  var url = "https://api.darksky.net/forecast/ef9fea25361db109862704601da8d480/"+lat+","+long;
  return axios.get(url);
}).then((response)=>{
  var temperature= response.data.currently.temperature;
  console.log(`Current Temp is:  ${temperature}`);

}).catch((e)=>{
  if(e.code==='ENOTFOUND'){
    console.log('Unable to connect with servers');
  }
  else{
    console.log('Unable to track this location');
  }
});
