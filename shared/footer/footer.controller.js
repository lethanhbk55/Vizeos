(function() {
    'use strict';

    angular
        .module('vizeos')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope'];

    /* @ngInject */
    function FooterController($scope) {

        $scope.$on('$includeContentLoaded', function() {
            Layout.initFooter(); // init footer
        });

        var vm = this;
    }
})();
