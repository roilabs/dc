(function () {

    var app = angular.module('mapApp');
    app.controller('mapController', mapController);

    function mapController($scope, $http, mapFactory) {

        vm = this

        mapFactory.getData().then(display)

        function display(response) {
            vm.dclocations = response.data.images;
        }

        vm.selectedDC = [];
        
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        var targetZoomLevel = 25;
        var targetScale = 0.5;     
        var icon = "M21.25,8.375V28h6.5V8.375H21.25zM12.25,28h6.5V4.125h-6.5V28zM3.25,28h6.5V12.625h-6.5V28z";
        var map = AmCharts.makeChart("mapdiv", {
            type: "map",
            projection: "miller",
            imagesSettings: {
                rollOverColor: "red",
                rollOverScale: 3,
                selectedScale: 3,
                selectedColor: "red",
            
            },

            areasSettings: {
                outlineThickness: 0.5,
                autoZoom: true,
                selectable: true
            },
            dataLoader: {
                url: "http://localhost:8000/locations",
                format: "json"
            },
            objectList: {
                container: "listdiv"
            },
            showImagesInList: true,
            listeners: [{
                event: "clickMapObject",
                method: function (event) {
                    $scope.$apply(function () { vm.selectedDC = event['mapObject']['title'] });
                }}]
        });



    }

})();