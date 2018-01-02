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
var geocode =require('./geocode/geocode.js');

geocode.geoAddress(argv.address,(error,results)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(JSON.stringify(results,undefined,2));
        let lat=results.latitude;
        let long= results.longitude;
        console.log(lat,long);
        request({
            url : "https://api.darksky.net/forecast/ef9fea25361db109862704601da8d480/"+lat+","+long   ,
            json : true
        },(error,Response,body)=> {
        console.log((body.currently.temperature-32)*5/9);
        });
    }
});



