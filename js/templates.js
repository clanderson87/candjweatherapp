define(["jquery", "hbs", "bootstrap"], function($, hbs, bootstrap) {

	return {
		loadWeatherHbs: function(weatherResultsByZip) {
			require(['hbs!../templates/mainOutput'], function(mainOutputHBS) {
				// $("#testWeatherOutput").html(mainOutputHBS({city: weatherResultsByZip}));
				$("#testWeatherOutput").html(mainOutputHBS(weatherResultsByZip));

			});
		}
	};
});