requirejs.config({
  baseUrl: "./js",
  paths:{
    "jquery": "../lib/lib/bower_components/jQuery/dist/jquery.min",
    "q": "../lib/lib/bower_components/q-bower/q",
    "bootstrap": "../lib/lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "hbs": "../lib/lib/bower_components/require-handlebars-plugin/hbs",
    "firebase" : "../lib/lib/bower_components/firebase/firebase"
  },
  shim: {
    "bootstrap": ["jquery"],
    "firebase": {exports: "Firebase"}
  }
});

require(

  ["jquery", "q", "authenticate", "bootstrap", "dataControl"],
  function($, q, authenticate, bootstrap, dataControl) {

  var firebaseRef = new Firebase("https://candjweatherapp.firebaseio.com/");


$("#searchByZip").click(function(){
  dataControl.weatherSearch(zip)
  .then(function(weatherResults){
    console.log("weatherResults", weatherResults);
    $("#testWeatherOutput").html(weatherResults);
  });
});


  // var getWeather = function(zip){
  // zip = $('#zip').val();
  //     $.ajax({
  //         url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip +",us&units=imperial&APPID=5194556d508058f5c7a03fec4d5b05f0"
  //         }).done(function(weatherData) {
  //           // Execute the callback function that was sent to me
  //               console.log(zip, weatherData);
  //               $("#testWeatherOutput").append(zip, weatherData);
  //         })
  //       }

  $("#loginUserButton").click(function(){
    authenticate.logInUser($('#emailInput').val(), $('#passwordInput').val());
    getWeather();
    });

  $('#registerUserButton').click(function(){
    authenticate.getRegister().then(function(authArray){
      var email = authArray[0];
      var password = authArray[1];
      authenticate.logInUser(email, password);
    });
    // getWeather();
    }
  )

});


