angular.module("myApp").factory("dataService", [
  "$http",
  function ($http) {
    return {
      getData: function () {
        return $http.get("http://localhost:3000/data");
      },
    };
  },
]);
