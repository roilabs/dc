(function () {

    var app = angular.module('mapApp');
    app.controller('mapController', mapController);

    function mapController($scope, $http) {

        vm = this

        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

        vm.testdata = [{
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Basingstoke",
            latitude: 51.2665,
            longitude: -1.0924,
            "description": "OTDC",
        }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Farnborough",
            latitude: 51.2869,
            longitude: -0.7526,
            "description": "OTDC2",
        }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "London",
            latitude: 51.5002,
            longitude: -0.1262,
            "label": "London",
            "description": "60 Victoria Embancment",
        }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Tokyo",
            latitude: 35.6785,
            longitude: 139.6823,
        }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Hong Kong",
            latitude: 22.3964,
            longitude: 114.1095,
        }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Singapore",
            latitude: 1.2894,
            longitude: 103.8500,
            "label": "Singapore",
        }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "New York",
            latitude: 40.8404,
            longitude: -74.0907,
            "label": "New York",
            "description": " Carlstad DC",
        }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Delaware",
            latitude: 39.6293,
            longitude: -75.6583,
            "description": "CDC1",
        }, {
            svgPath: targetSVG,
            zoomLevel: 5,
            scale: 0.5,
            title: "Dallas",
            latitude: 32.974586,
            longitude: -96.889900,
            "description": "EDC1",
        }]

        $http.get('data/locations.json')
            .then(function (response) {
                vm.dclocations = response.data;
            });

        var map = AmCharts.makeChart("mapdiv", {
            type: "map",

            projection: "miller",
            imagesSettings: {
                rollOverColor: "#CC0000",
                rollOverScale: 3,
                selectedScale: 3,
                selectedColor: "#CC0000"
            },

            areasSettings: {
                outlineThickness: 0.5,
            },

            dataProvider: {
                map: "worldLow",
                images: vm.testdata
            },

            objectList: {
                container: "listdiv"
            },
            showImagesInList: true
        });

    }

})();