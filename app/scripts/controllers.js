'use strict';

(function(angular){

  function SchoolListController(School,PopupService) {
    var that = this;
    School.query(function(data){
      that.schools = data;
    },function(error){
      console.log(error);
      PopupService.errorPopup('Unable to retrieve school list');
    });
  }
  SchoolListController.$inject = ['School','PopupService'];

  function SchoolViewController($routeParams, $location, School, PopupService){
    var that = this;

    School.get({id: $routeParams.id},function(data){
      that.school = data;
    },function(error){
      console.log(error);
      PopupService.errorPopup('Unable to retrieve school');
    });

    this.deleteSchool = function (school) {
      PopupService.confirmPopup('You sure you want to delete this?',function(result){
        if (result) {
          school.$delete(function () {
            $location.path('/schools');
            PopupService.successPopup('You have deleted a School.');
          },function(error){
            console.log(error);
            PopupService.errorPopup('Unable to delete school');
          });
        }
      });
    };
  }
  SchoolViewController.$inject = ['$routeParams', '$location', 'School','PopupService'];


  function SchoolCreateController($location, School, PopupService){
    this.school = new School();
    var that = this;

    this.addSchool = function(){
      that.school.$save(function () {
        $location.path('/schools'); // on success go back to home
        PopupService.successPopup('You have add a School.');
      },function(error){
        console.log(error);
        PopupService.errorPopup('Unable to save school');
      });
    };
  }
  SchoolCreateController.$inject = ['$location', 'School', 'PopupService'];

  function SchoolEditController($location, $routeParams, School, PopupService){
    var that = this;

    this.editSchool = function () {
      that.school.$update(function () { // update an existing school. Issues a PUT to /api/school
        $location.path('/schools'); // on success go back to home
        PopupService.successPopup('You have updated a School');
      },function(error){
        console.log(error);
        PopupService.errorPopup('Unable to update school');
      });
    };

    this.loadSchool = function () {
      School.get({id: $routeParams.id},function(data){
        that.school = data;
      },function(error){
        console.log(error);
        PopupService.errorPopup('Unable to retrieve school');
      });
    };
    // default method
    that.loadSchool();
  }
  SchoolEditController.$inject = ['$location', '$routeParams', 'School', 'PopupService'];
  angular.module('schoolSpaApp.controllers',[]).controller('SchoolListController',SchoolListController)
    .controller('SchoolViewController',SchoolViewController)
    .controller('SchoolCreateController',SchoolCreateController)
    .controller('SchoolEditController',SchoolEditController);
})(angular);
