(function () {

    var app = angular.module('contactApp');
    app.factory('contactFactory', contactFactory);

    function contactFactory($http) {

        return {
            getData : getDataImp
        };

        function getDataImp() {
            return $http.get('http://localhost:8000/contacts')
        }
    }

})();