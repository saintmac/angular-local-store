angular.module('ngLocalStore', []).service('$localStore', function() {
  var LocalStore;
  LocalStore = (function() {
    function LocalStore() {}

    LocalStore.prototype.get = function(key) {
      return JSON.parse(localStorage.getItem(key));
    };

    LocalStore.prototype.put = function(key, value) {
      if (value)
        return localStorage.setItem(key, JSON.stringify(value));
      else
        return false;
    };

    LocalStore.prototype.remove = function(key) {
      return localStorage.removeItem(key);
    };

    LocalStore.prototype.clear = function(key) {
      return localStorage.clear();
    };

    return LocalStore;

  })();
  return new LocalStore();
});
