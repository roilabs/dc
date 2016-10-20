(function () {


    var mod = angular.module('formApp');

    mod.directive('formTemplate', formTemplate);

    function formTemplate() {
        return {
            restrict: 'E',
            bindToController: true,
            controller: FormTemplateController,
            controllerAs: 'vm',
            scope: {
                currentUserEmail: '@'
            },
            templateUrl: 'app/common/formTemplate.html'
        };
    }

    function FormTemplateController() {
        
        

    }



})();