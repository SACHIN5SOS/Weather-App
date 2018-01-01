var request = require('request');
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
var url= 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress;
request({
   url : 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress ,
   json:true
},(error,response,body)=> {
    // console.log(JSON.stringify(body,undefined,2));  //to check all objects 
    if(error){
        console.log('Unable to connect with Google Server');
    }
    else if(body.status==='ZERO_RESULTS'){
        console.log('Unable to find that address');
    }
    else if(body.status==='OK'){
    console.log(`Address:  ${body.results[0].formatted_address}`);
    console.log(`Longitude:  ${body.results[0].geometry.location.lng}`);
    console.log(`Latitude:  ${body.results[0].geometry.location.lat}`);
}
 })