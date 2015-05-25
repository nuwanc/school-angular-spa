'use strict';

(function(angular){

  function SchoolListController(School,PopupService) {

    School.query(function(data){
      this.schools = data;
    }.bind(this),function(error){
      console.log(error);
      PopupService.errorPopup('Unable to retrieve school list');
    });
  }
  SchoolListController.$inject = ['School','PopupService'];

  function SchoolViewController($routeParams, $location, School, PopupService){

    School.get({id: $routeParams.id},function(data){
      this.school = data;
    }.bind(this),function(error){
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

    this.addSchool = function(){
      this.school.$save(function () {
        $location.path('/schools'); // on success go back to home
        PopupService.successPopup('You have add a School.');
      },function(error){
        console.log(error);
        PopupService.errorPopup('Unable to save school');
      });
    }.bind(this);
  }
  SchoolCreateController.$inject = ['$location', 'School', 'PopupService'];

  function SchoolEditController($location, $routeParams, School, PopupService){

    this.editSchool = function () {
      this.school.$update(function () { // update an existing school. Issues a PUT to /api/school
        $location.path('/schools'); // on success go back to home
        PopupService.successPopup('You have updated a School');
      },function(error){
        console.log(error);
        PopupService.errorPopup('Unable to update school');
      });
    }.bind(this);

    this.loadSchool = function () {
      School.get({id: $routeParams.id},function(data){
        this.school = data;
      }.bind(this),function(error){
        console.log(error);
        PopupService.errorPopup('Unable to retrieve school');
      });
    };
    // default method
    this.loadSchool();
  }
  SchoolEditController.$inject = ['$location', '$routeParams', 'School', 'PopupService'];
  angular.module('schoolSpaApp.controllers',[]).controller('SchoolListController',SchoolListController)
    .controller('SchoolViewController',SchoolViewController)
    .controller('SchoolCreateController',SchoolCreateController)
    .controller('SchoolEditController',SchoolEditController);
})(angular);
