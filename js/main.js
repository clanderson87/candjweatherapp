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

  ["jquery", "q", "authenticate"],
  function($, q, authenticate) {

  var firebaseRef = new Firebase("https://candjweatherapp.firebaseio.com/");



  $(document).on('click', '#registerFormButton', function() {
   console.log("register here button is working and has been clicked");
  $('#registerForm').show();
  
  });

  $("#loginUserButton").click(function(){
    authenticate.logInUser($('#loginEmailInput').val(), $('#loginPasswordInput').val());
  });

  $('#registerUserButton').click(function(){
    authenticate.getRegister().then(function(authArray){
      var email = authArray[0];
      var password = authArray[1];
      authenticate.logInUser(email, password);
    });
  });

});