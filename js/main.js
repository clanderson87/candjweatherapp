requirejs.config({
  baseUrl: "./js",
  paths:{
    "jquery": "../lib/lib/bower_components/jQuery/dist/jquery.min",
    "q": "../lib/lib/bower_components/q-bower/q",
    "bootstrap": "../lib/lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "hbs": "../lib/lib/bower_components/require-handlebars-plugin/hbs",
    "firebase" : "../lib/lib/bower_components/firebase/firebase",
    "handlebars" : "../lib/lib/bower_components/require-handlebars-plugin/hbs"
  },
  shim: {
    "bootstrap": ["jquery"],
    "firebase": {exports: "Firebase"}
  }
});

// define(["hbs",
//             "hbs!../templates/dogfood",
//             "hbs!../templates/catfood"],
//     function(handlebars, dogTmpl, catTmpl) {

//       return {
//         dogTmpl: function(fbObject) {
//           // console.log("dogTmpl is here!");
//           return dogTmpl(fbObject);
//         },
//         catTmpl: function(fbObject) {
//           // console.log("catTmpl is here!");
//           return catTmpl(fbObject);
//         }
//       };
// });

require(

  ["jquery", "q", "authenticate", "bootstrap", "LoadHBS"],
  function($, q, authenticate, bootstrap, LoadHBS) {

  var firebaseRef = new Firebase("https://candjweatherapp.firebaseio.com/");



  // $(document).on('click', '#registerFormButton', function() {
  //  console.log("register here button is working and has been clicked");
  // $('#registerForm').show();

  // });

  var getWeather = function(zip){
      zip = $('#zip').val();
      console.log(zip);
      $.ajax({
          url: "http://api.openweathermap.org/data/2.5/weather?zip="+ zip +",us&units=imperial&APPID=5194556d508058f5c7a03fec4d5b05f0"
          }).success(function(weatherData) {
            // Execute the callback function that was sent to me
                console.log(zip, weatherData);
                $('#input').hide();
                LoadHBS.weatherHbs(weatherData);
                console.log(weatherData.weather[0]);
          })
        }

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
    getWeather();
    }
  )

});


