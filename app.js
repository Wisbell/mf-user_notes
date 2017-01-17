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

app.controller('NoteCtrl', function($scope, $http){
  console.log("Note controller")

  $scope.createNote = function(){
    console.log("Create Note Button Clicked")

    console.log("note name", $scope.noteName)
    console.log("note text", $scope.noteText)

    let note = {
                "name": $scope.noteName,
                "text": $scope.noteText
              }

    $http.post(`https://west-user-notes.firebaseio.com/notes.json`, JSON.stringify(note))
  }
})

app.controller('NoteListCtrl', function($scope, $http){
  console.log("Note List controller")

  $http.get(`https://west-user-notes.firebaseio.com/notes.json`)
    .then(function(val){
      //console.log(val)
      $scope.noteList = val.data;
      console.log($scope.noteList)

      for(key in val.data){
        console.log(val.data[key])
      }
    })

})
