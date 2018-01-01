var request = require('request');
request({
   url : 'https://maps.googleapis.com/maps/api/geocode/json?address=%20Bsf%20camp%20Indore' ,
   json:true
},(error,response,body)=> {
    console.log(body);
})