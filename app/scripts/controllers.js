'use strict';

angular.module('schoolSpaApp.controllers', []).controller('SchoolListController', ['$scope', 'School', function ($scope, School) {
  $scope.schools = School.query();

}]).controller('SchoolViewController', ['$scope', '$routeParams', '$location', 'School','PopupService', function ($scope, $routeParams, $location, School, PopupService) {
  $scope.school = School.get({id: $routeParams.id});

  $scope.deleteSchool = function (school) {

    PopupService.confirmPopup('You sure you want to delete this?',function(result){
      if (result) {
        school.$delete(function () {
          $location.path('/schools');
          PopupService.successPopup('You have deleted a School.');
        });
      }
    });

  }

}]).controller('SchoolCreateController', ['$scope', '$location', 'School', 'PopupService', function ($scope, $location, School, PopupService) {
  $scope.school = new School();

  $scope.addSchool = function () { //create a new school. Issues a POST to /api/school
    $scope.school.$save(function () {
      $location.path('/schools'); // on success go back to home
      PopupService.successPopup('You have add a School.');
    });
  };
}]).controller('SchoolEditController', ['$scope', '$location', '$routeParams', 'School', 'PopupService', function ($scope, $location, $routeParams, School, PopupService) {
  $scope.editSchool = function () {
    $scope.school.$update(function () { // update an existing school. Issues a PUT to /api/school
      $location.path('/schools'); // on success go back to home
      PopupService.successPopup('You have updated a School');
    });
  };

  $scope.loadSchool = function () {
    $scope.school = School.get({id: $routeParams.id});
  };
  // default method
  $scope.loadSchool();
}])
