define(["jquery", "q", "firebase"],
  function($, q, firebase) {

    var firebaseRef = new Firebase("https://candjweatherapp.firebaseio.com/");

    return {
      //this logs user into firebase based on email and password
      logInUser: function(email, password) {
        firebaseRef.authWithPassword({
          email: email,
          password: password

          // 'email': "jonathanhuffaker@gmail.com",
          // 'password': "abc"

        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else{
            console.log("login successful");
            // $("#loginRegister").remove();
            // $("#myNav").show();


            // Below is an example from movie viewer
            // dataControl.getMovies()
            //   .then(function(originalMoviesArray) {
            //     // console.log("originalMoviesArray", originalMoviesArray);
            //  templates.loadProfileHbs(originalMoviesArray);
            // });

          }
        });

      },



    // ==================below registers user

        getRegister: function(){
          var deferred = q.defer();
          console.log($('#emailInput').val());
          console.log($('#passwordInput').val());
          var newUserEmail = $('#emailInput').val();
          firebaseRef.createUser({
            email    : newUserEmail,
            password : $('#passwordInput').val()
            }, function(error, userData) {
                if (error) {
                  console.log("Error creating user:", error);
                  } else {
                    var newUser ={
                      userEmail: newUserEmail
                    };
                    firebaseRef.child('users').child(userData.uid).set(newUser);
                    var promiseArray = [newUserEmail, $("#passwordInput").val()];

                    deferred.resolve(promiseArray);
                  }
                });

              return deferred.promise;
              }
        };


  });
