'use strict';

angular
  .module('schoolSpaApp', [
    'ngResource',
    'ngRoute',
    'schoolSpaApp.services',
    'schoolSpaApp.controllers']);


angular
  .module('schoolSpaApp').config(function ($routeProvider) {
  $routeProvider
    .when('/schools', {
      templateUrl: 'views/schools.html',
      controllerAs: 'ctrl',
      controller: 'SchoolListController'
    })
    .when('/schools/:id', {
      templateUrl: 'views/school-view.html',
      controllerAs: 'ctrl',
      controller: 'SchoolViewController'
    })
    .when('/school/new', {
      templateUrl: 'views/school-new.html',
      controllerAs: 'ctrl',
      controller: 'SchoolCreateController'
    })
    .when('/school/edit/:id', {
      templateUrl: 'views/school-edit.html',
      controllerAs: 'ctrl',
      controller: 'SchoolEditController'
    })
    .otherwise({
      redirectTo: '/schools'
    });
});

//set the rest api url in here.
angular
  .module('schoolSpaApp').constant('REST_URL', 'http://localhost:8080/');
