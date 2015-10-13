myapp.controller("HomeController", ["$scope", "$http", "$mdDialog", function ($scope, $http, $mdDialog) {
    $http.get('/JS/Data/data.js').
  success(function (data, status, headers, config) {
      $scope.items = data;
      $scope.currentPage = 0;
      $scope.pageSize = 1;
      $scope.tempData = [];
      $scope.numberOfPages = function () {
          return Math.ceil($scope.items.length / $scope.pageSize);
      };
      for (var i = 0; i < $scope.items.length; i++) {
          $scope.tempData.push($scope.items[i]);
      }
  }).
  error(function (status, headers, config) {
      alert(status);
  });

    $scope.showAdvanced = function (ev, src) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:src,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });
    };
    
    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }
}]);

