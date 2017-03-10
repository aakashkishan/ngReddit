// Ionic Starter App

( function() {


  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  var app = angular.module('ngReddit', ['ionic'])


  //Creating a Angular-Controller with $scope Service.
  app.controller('redditCtrl', function($scope, $http, $ionicPopup, $timeout) {

    //Alerting the Chosen Feed as a Pop-Up.
    // An alert dialog
    // $scope.showAlert = function() {
    //   var alertPopup = $ionicPopup.alert({
    //     title: {{feed.title}},
    //     template: {{feed.thumbnail}}
    //   });

    //   alertPopup.then(function(res) {
    //     console.log('Alert');
    //   });
    // };

    //Declaring and Intialising a feeds array using $scope and $http Service.
    //It contains all the feeds to be run / displayed.
    $scope.feeds = [];

    //Get the Data required to be printed from reddit using the below URL and $http Service.
    $http.get('https://www.reddit.com/r/funny/new/.json')
      // OnSuccess print the Title and SelfText of the gotten data based on the received data's format.
      .success( function(response){
        //forEach() in angular recieves an Array and gives each Element of the Array.
        angular.forEach(response.data.children, function(post) {
          //This is the required fields (title & selftext) for the reddit/r/Jokes.
          $scope.feeds.push(post.data);
        })
      })

  });


  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

}());
