'use strict';

angular
  .module('schoolSpaApp', [
    'ngResource',
    'ngRoute',
    'schoolSpaApp.services',
    'schoolSpaApp.controllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/schools', {
        templateUrl: 'views/schools.html',
        controller: 'SchoolListController'
      })
      .when('/schools/:id', {
        templateUrl: 'views/school-view.html',
        controller: 'SchoolViewController'
      })
      .when('/school/new',{
        templateUrl: 'views/school-new.html',
        controller: 'SchoolCreateController'
      })
      .otherwise({
        redirectTo: '/schools'
      });
  });
