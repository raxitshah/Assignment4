var myapp = angular.module("materialdemoapp", ['ngMaterial', 'ui.router']);

myapp.filter('startFrom', function () {
    return function (input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    };
});


myapp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("home",
            {
                url: "/",
                templateUrl: "templates/Home.html",
                controller: "HomeController"
            });
    }
]);