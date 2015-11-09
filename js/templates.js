define(["jquery", "hbs", "bootstrap"], function($, hbs, bootstrap) {

  return {
    WeatherHbs: function(weatherData) {
      require(['hbs!../templates/mainOutput'], function(mainOutputHBS) {
        // $("#testWeatherOutput").html(mainOutputHBS({city: weatherResultsByZip}));
        $("#output").html(mainOutputHBS(weatherData));

      });
    }
  };
});
