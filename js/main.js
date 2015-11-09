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

  ["jquery", "q", "authenticate", "bootstrap", "dataControl", "templates"],
  function($, q, authenticate, bootstrap, dataControl, templates) {

  var firebaseRef = new Firebase("https://candjweatherapp.firebaseio.com/");


  $("#searchByZip").click(function(){
    var zip = $('#zip').val();
    dataControl.weatherSearch(zip)
    .then(function(weatherSearch){
      console.log("weatherSearch", weatherSearch);
      templates.loadWeatherHbs(weatherSearch);
    });
  });

  // $("#saveSearchButton").on("click", function(){
  //   console.log("please work");

  // });

 $("#saveSearchButton").click(function(){
    console.log("please work");

  });

 $("#pleaseWork").on("click", function(){
    console.log("the muhfkn green button is responsive");
 });
  // $("#saveSearchButton").on("click", function(){
  //   console.log("WTF Muhfuka");
  //   // alert("your saveSearch button worked");
  // });

 

  $("#loginUserButton").click(function(){
    authenticate.logInUser($('#emailInput').val(), $('#passwordInput').val());
    });

  $('#registerUserButton').click(function(){
    authenticate.getRegister().then(function(authArray){
      var email = authArray[0];
      var password = authArray[1];
      authenticate.logInUser(email, password);
    });
    }
  )

});


