define(["jquery", "q", "firebase"],
  function($, q, firebase) {

  var firebaseRef = new firebase("https://candjweatherapp.firebaseio.com/");
  // consolidating modules to prevent from going back and forth between files so much
  var usersCurrentWeather = null;

	return {

		weatherSearch: function(zip) {
			// var zip = $('#zip').val();
			var deferred = q.defer();
			$.ajax({ url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip +",us&units=imperial&APPID=5194556d508058f5c7a03fec4d5b05f0"})
			.done(function(weatherResults){
				console.log("Success");
				console.log("weatherResults", weatherResults);
				usersCurrentWeather = weatherResults;
				deferred.resolve(weatherResults);
			})
			.fail(function(){
				console.log("Weather search by zip was a big failure!");
			});
			return deferred.promise;

		}
	}

});






