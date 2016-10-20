(function () {

    var app = angular.module('dcApp', ['ngRoute', 'ui.bootstrap', 'mapApp', 'contactApp']);

    app.config(function ($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "app/map/map-view.html",
            controller: "mapController",
            controllerAs: "vm"
        })
        .when("/contact/:siteId", {
            templateUrl: "app/contact/contact-view.html",
            controller: "contactController",
            controllerAs: "vm"
        })
    });


    
})();