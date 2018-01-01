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
    }
});
