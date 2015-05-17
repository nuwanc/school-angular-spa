'use strict';

angular.module('schoolSpaApp.services', []).factory('School', function($resource,REST_URL) {
  return $resource(REST_URL+'api/school/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('PopupService',function(){
  this.confirmPopup = function(message,cb) {
    bootbox.confirm(message,function(result){
      cb(result);
    });
  }
});
