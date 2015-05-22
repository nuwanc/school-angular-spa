'use strict';

(function(angular,bootbox,toastr){
  function School($resource,REST_URL){
    return $resource(REST_URL+'api/school/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  }

  function PopupService(){
    this.confirmPopup = function(message,cb) {
      bootbox.confirm(message,function(result){
        cb(result);
      });
    };
    this.successPopup = function(message){
      toastr.success(message);
    };
    this.errorPopup = function(message){
      toastr.error(message);
    };
  }
  angular.module('schoolSpaApp.services', [])
    .factory('School',School)
    .service('PopupService',PopupService);

})(angular,bootbox,toastr);
