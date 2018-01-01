var request = require('request');
request({
   url : 'https://maps.googleapis.com/maps/api/geocode/json?address=%20Bsf%20camp%20Indore' ,
   json:true
},(error,response,body)=> {
    // console.log(JSON.stringify(body,undefined,2));  //to check all objects 
    console.log(`Address:  ${body.results[0].formatted_address}`);
    console.log(`Longitude:  ${body.results[0].geometry.location.lng}`);
    console.log(`Latitude:  ${body.results[0].geometry.location.lat}`);
 })