(function() {
    'use strict';

    angular
        .module('vizeos')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ["$rootScope"];

    /* @ngInject */
    function ProfileController($rootScope) {
        var vm = this;

        vm.data = {
            profile: $rootScope.globals.profile
        }
    }
})();
