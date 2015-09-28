var myapp = angular.module('myrouterapp', ["ui.router"]);

myapp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("home",
            {
                url: "/",
                templateUrl: "templates/home.html",
                controller: "HomeController"
            }).state("about",
                {
                    url: "/about",
                    templateUrl: "templates/About.html",
                    controller: "AboutController"
                }).state("contact",
                    {
                        url: "/contact",
                        templateUrl: "templates/Contact.html",
                        controller: "ContactController"
                    }


        );
    }
]);