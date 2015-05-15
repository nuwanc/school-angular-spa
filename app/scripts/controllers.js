'use strict';

angular.module('schoolSpaApp.controllers', []).controller('SchoolListController',function($scope,School){
  $scope.schools = School.query();
}).controller('SchoolViewController',function($scope,$routeParams,School){
  $scope.school = School.get({ id: $routeParams.id });
}).controller('SchoolCreateController',function($scope,$location,School){
  $scope.school = new School();

  $scope.addSchool = function() { //create a new school. Issues a POST to /api/school
    $scope.school.$save(function() {
      $location.path('/schools'); // on success go back to home i.e. .
    });
  };
})
