const request = require('request');


var geoAddress = (address,callback) => {
var encodedAddress= encodeURIComponent(address);
var url= 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress;
request({
   url : 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress ,
   json:true
},(error,response,body)=> {
    // console.log(JSON.stringify(body,undefined,2));  //to check all objects 
    if(error){
        callback('Unable to connect');
    }
    else if(body.status==='ZERO_RESULTS'){
        callback('Unable to find that address');
    }
    else if(body.status==='OK'){
        callback(undefined,{
            address: body.results[0].formatted_address,
            longitude: body.results[0].geometry.location.lng,
            latitude: body.results[0].geometry.location.lat
        });
}
 })
}

module.exports={
    geoAddress
}