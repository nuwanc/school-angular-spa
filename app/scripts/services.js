'use strict';

angular.module('schoolSpaApp.services', []).factory('School', function($resource) {
  return $resource('http://localhost:8080/api/school/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
});
