(function () {

    var app = angular.module('mapApp');
    app.controller('mapController', mapController);

    function mapController($scope, $http, mapFactory) {

        vm = this

        mapFactory.getData().then(display)

        function display(response) {
            vm.dclocations = response.data;




        }

        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        var targetZoomLevel = 25;
        var targetScale = 0.5;





        vm.testdata = [{
            svgPath: targetSVG,
            zoomLevel: targetZoomLevel,
            scale: targetScale,
            title: "Basingstoke",
            latitude: 51.2665,
            longitude: -1.0924,
            "label": "OTDC"
        }, {
            svgPath: targetSVG,
            zoomLevel: targetZoomLevel,
            scale: targetScale,
            title: "Farnborough",
            latitude: 51.2869,
            longitude: -0.7526,
            "label": "OTDC2"
        }, {
            svgPath: targetSVG,
            zoomLevel: targetZoomLevel,
            scale: targetScale,
            title: "London",
            latitude: 51.5002,
            longitude: -0.1262,
            "label": "London"
        }, {
            svgPath: targetSVG,
            zoomLevel: targetZoomLevel,
            scale: targetScale,
            title: "Tokyo",
            latitude: 35.6785,
            longitude: 139.6823,
            "label": "Tokyo"
        }, {
            svgPath: targetSVG,
            zoomLevel: targetZoomLevel,
            scale: targetScale,
            title: "Hong Kong",
            latitude: 22.3964,
            longitude: 114.1095,
            "label": "Hong Kong"
        }, {
            svgPath: targetSVG,
            zoomLevel: targetZoomLevel,
            scale: targetScale,
            title: "Singapore",
            latitude: 1.2894,
            longitude: 103.8500,
            "label": "Singapore",
        }, {
            svgPath: targetSVG,
            zoomLevel: targetZoomLevel,
            scale: targetScale,
            title: "New York",
            latitude: 40.8404,
            longitude: -74.0907,
            "label": "New York"
        }, {
            svgPath: targetSVG,
            zoomLevel: targetZoomLevel,
            scale: targetScale,
            title: "Delaware",
            latitude: 39.6293,
            longitude: -75.6583,
            "label": "CDC1"
        }, {
            svgPath: targetSVG,
            zoomLevel: targetZoomLevel,
            scale: targetScale,
            title: "Dallas",
            latitude: 32.974586,
            longitude: -96.889900,
            "label": "EDC1"
        }]

        

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
                //images: vm.testdata
                images: vm.dclocations
            },

            objectList: {
                container: "listdiv"
            },
            showImagesInList: true
        });

    }

})();