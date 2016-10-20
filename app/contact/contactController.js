(function () {

    var app = angular.module('contactApp');
    app.controller('contactController', contactController);

    function contactController($scope, $http, $routeParams, filterFilter, contactFactory) {

        vm = this

        vm.dclocation = $routeParams.siteId

        vm.selectedUserEmail = [];
        vm.setSelectedUserEmail = setSelectedUserEmail;

        function setSelectedUserEmail(user) {
            vm.selectedUserEmail = user
        }

        contactFactory.getData().then(display)

        function display(response) {

            vm.dccontacts = filterFilter(response.data, { name: vm.dclocation });
         
        }
    }

})();

