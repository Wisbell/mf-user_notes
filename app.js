console.log("app.js loaded")


//add firebase


// configure angular
var app = angular.module('noteApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('')

  $routeProvider
    .when('/new-note', {
      controller: 'NoteCtrl',
      templateUrl: 'partials/new-note.html'
    })
    .when('/list-notes', {
      controller: 'NoteListCtrl',
      templateUrl: 'partials/note-list.html'
    })
    .otherwise({
      redirectTo: '/list-notes'
    })
})


// app.controller('RegisterCtrl', function($scope){

// })

// app.controller('LoginCtrl', function($scope){

// })

app.controller('NoteCtrl', function($scope){
  console.log("Note controller")

  $scope.createNoteButton = $('').on('click', function(){

  })
})

app.controller('NoteListCtrl', function($scope, $http){
  console.log("Note List controller")

  //$http

})
