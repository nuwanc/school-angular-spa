'use strict';

var app = angular
  .module('schoolSpaApp', [
    'ngResource',
    'ngRoute',
    'schoolSpaApp.services',
    'schoolSpaApp.controllers'
  ]);


app.config(function ($routeProvider) {
  $routeProvider
    .when('/schools', {
      templateUrl: 'views/schools.html',
      controller: 'SchoolListController'
    })
    .when('/schools/:id', {
      templateUrl: 'views/school-view.html',
      controller: 'SchoolViewController'
    })
    .when('/school/new', {
      templateUrl: 'views/school-new.html',
      controller: 'SchoolCreateController'
    })
    .when('/school/edit/:id', {
      templateUrl: 'views/school-edit.html',
      controller: 'SchoolEditController'
    })
    .otherwise({
      redirectTo: '/schools'
    });
});

//set the rest api url in here.
app.constant('REST_URL', 'http://localhost:8080/api/school/:id');
