const request= require('./WeatherApp-node/node_modules/request');

var geoAddress=(address)=>{
    
    return new Promise((resolve,reject)=>{
    var encodedAddress= encodeURIComponent(address);
    var url= 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodedAddress;
    request({
        url,
        json:true
    },(error,response,body)=>{
        if(error){
            reject('Unable to  connect');
        }
        else if(body.status==='ZERO_RESULTS'){
            reject('Location information not available');
        }
        else if(body.status==='OK'){
            resolve({
                address: body.results[0].formatted_address,
                longitude: body.results[0].geometry.location.lng,
                latitude: body.results[0].geometry.location.lat
            })

        }
    })
})       


}

geoAddress('bsf campus indore').then((message)=>{
    console.log(JSON.stringify(message,undefined,2));

},(errorMessage)=>{
    console.log(errorMessage);
})