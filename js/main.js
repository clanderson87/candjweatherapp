  getWeather: function(zip){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip +",us&units=imperial&APPID=5194556d508058f5c7a03fec4d5b05f0"
        }).done(function(weatherData) {
          // Execute the callback function that was sent to me
              console.log(zip, weatherData);
        }
