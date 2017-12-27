var x = document.getElementById("demo");
let long;
let lat;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
   
     long = position.coords.longitude;
     lat = position.coords.latitude;
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    var url= "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=25298949385287212cc8437a4005ec84";
    console.log(url) ;
    $.getJSON(url,function(data){
        
        console.log(data.main.temp-273.15);
        $('#weather').append(data.main.temp-273.15).css({'color':'white','font-weight':'strong'});
        $('body').css({'background-image':'url(https://images.unsplash.com/photo-1507697364665-69eec30ea71e?auto=format&fit=crop&w=751&q=80.jpg)','background-size':'cover','background-repeat':'no-repeat'})
    })

}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


