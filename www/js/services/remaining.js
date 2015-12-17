angular.module('starter.services', [])
.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObj: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObj: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);
