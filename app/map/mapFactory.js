(function () {

    var app = angular.module('mapApp');
    app.factory('mapFactory', mapFactory);

    function mapFactory($http) {

        return {
            getData : getDataImp
        };

        function getDataImp() {
            return $http.get('http://localhost:8000/locations')
        }


    }

})();