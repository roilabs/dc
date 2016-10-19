(function () {

    var app = angular.module('contactApp');
    app.controller('contactController', contactController);

    function contactController($scope, $http, $routeParams, filterFilter, contactFactory) {

        vm = this

        vm.dclocation = $routeParams.siteId

        contactFactory.getData().then(display)

        function display(response) {

            vm.dccontacts = filterFilter(response.data, { name: vm.dclocation });
         
        }


    }

})();