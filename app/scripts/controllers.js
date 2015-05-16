'use strict';

angular.module('schoolSpaApp.controllers', []).controller('SchoolListController', function ($scope, School) {
  $scope.schools = School.query();

}).controller('SchoolViewController', function ($scope, $routeParams, $location,School) {
  $scope.school = School.get({id: $routeParams.id});

  $scope.deleteSchool = function(school) {
    school.$delete(function(){
      $location.path('/schools');
    });
  }

}).controller('SchoolCreateController', function ($scope, $location, School) {
  $scope.school = new School();

  $scope.addSchool = function () { //create a new school. Issues a POST to /api/school
    $scope.school.$save(function () {
      $location.path('/schools'); // on success go back to home
    });
  };
}).controller('SchoolEditController', function ($scope, $location, $routeParams, School) {
  $scope.editSchool = function () {
    $scope.school.$update(function () { // update an existing school. Issues a PUT to /api/school
      $location.path('/schools'); // on success go back to home
    });
  };

  $scope.loadSchool = function () {
    $scope.school = School.get({id: $routeParams.id});
  };

  $scope.loadSchool();
})
