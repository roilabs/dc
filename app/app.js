(function () {

    var app = angular.module('dcApp', ['ngRoute', 'mapApp']);

    app.config(function ($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "app/map/map-view.html",
            controller: "mapController",
            controllerAs: "vm"
        })
    });


    
})();