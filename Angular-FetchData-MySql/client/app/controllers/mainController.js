angular.module("myApp").controller("MainController", [
  "$scope",
  "dataService",
  function ($scope, dataService) {
    $scope.data = [];

    dataService.getData().then(
      function (response) {
        $scope.data = response.data;
      },
      function (error) {
        console.error("Error fetching data:", error);
      }
    );
  },
]);
