Angular $cookieStore like API for localStorage
Want to use localStorage in your angular Apps with the same API than $cookieStore? $localStore is for you

# install

    bower install angular-local-store --save

In your app module definition, add `ngLocalStore` as a dependency

    angular.module('myApp', ['ngLocalStore']);

# use
$localStore's API is the same than the [$cookieStore API](http://docs.angularjs.org/api/ngCookies/service/$cookieStore)
You can store strings, arrays, objects...

```javascript
$localStore.put('car', {brand: 'tesla', wheels: 4});

var car = $localStore.get('car');

$localStore.remove('car');

```

## clear
$localStore adds an extra `#clear` method to remove every key from localStorage (similar to `localStorage.clear()`)

```javascript
$localStore.clear();
```

