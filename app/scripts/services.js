'use strict';

angular.module('schoolSpaApp.services', []).factory('School', function($resource,REST_URL) {
  return $resource(REST_URL, { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
});
