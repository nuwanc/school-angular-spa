'use strict';

angular.module('schoolSpaApp.controllers', []).controller('SchoolListController',function($scope,School){
  $scope.schools = School.query();
}).controller('SchoolViewController',function($scope,$routeParams,School){
  $scope.school = School.get({ id: $routeParams.id });
});
