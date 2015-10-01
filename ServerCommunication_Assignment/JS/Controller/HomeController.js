myapp.controller("homecontroller", ["$scope", "$http", function ($scope, $http) {
    $scope.title = "Home";
    
    $http.get('/JS/Data/data.js').
    success(function (data, status, headers, config) {
        $scope.items = data;
    }).
    error(function (data, status, headers, config) {
        alert(status);
        alert(data);
    });
        
}]);