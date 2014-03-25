angular.module('ngLocalStore', []).service('$localStore', function() {
  var LocalStorage;
  LocalStorage = (function() {
    function LocalStorage() {}

    LocalStorage.prototype.get = function(key) {
      return JSON.parse(localStorage.getItem(key));
    };

    LocalStorage.prototype.put = function(key, value) {
      return localStorage.setItem(key, JSON.stringify(value));
    };

    LocalStorage.prototype.remove = function(key) {
      return localStorage.removeItem(key);
    };

    return LocalStorage;

  })();
  return new LocalStorage();
});

