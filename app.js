console.log("app.js loaded")


//add firebase


// configure angular
var app = angular.module('userNoteApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('')

  $routeProvider
    // .when('/', {
    //   controller: 'MainCtrl'
    //   templateUrl: ''
    // })
    // .when('/login', {
    //   controller: 'LoginCtrl'
    //   templateUrl: 'partials/login.html'
    // })
    // .when('/register', {
    //   controller: 'RegisterCtrl'
    //   templateUrl: 'partials/registration.html'
    // })
    .when('/new-note', {
      controller: 'NoteCtrl'
      templateUrl: 'partials/new-note.html'
    })
    .when('/list-notes', {
      controller: 'NoteListCtrl'
      templateUrl: 'partials/note-list.html'
    })
    .otherwise({
      redirectTo: '/list-notes'
    })
})

// app.controller('MainCtrl', function($scope){

// })


// app.controller('RegisterCtrl', function($scope){

// })

// app.controller('LoginCtrl', function($scope){

// })

app.controller('NoteCtrl', function($scope){
  console.log("Note controller")
})

app.controller('NoteListCtrl', function($scope){
  console.log("Note List controller")
})
