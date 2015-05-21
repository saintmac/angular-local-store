angular.module('ngLocalStore', []).service('$localStore', function() {
  var LocalStore;
  LocalStore = (function() {
    function LocalStore() {}

    LocalStore.prototype.get = function(key) {
      var result;
      try {
        result = JSON.parse(localStorage.getItem(key));
      }
      catch (err) {
        result = null;
      }

      return result;
    };

    LocalStore.prototype.put = function(key, value) {
      if (value)
        try {
          return localStorage.setItem(key, JSON.stringify(value));
        }
        catch (error) {
          return false;
        }
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
