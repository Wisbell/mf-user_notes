console.log("app.js loaded")


//add firebase


// configure angular
var app = angular.module('userNotesApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('')

  $routeProvider
    .when()
})


app.controller('MainCtrl', function($scope){

})
