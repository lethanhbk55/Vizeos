(function() {
    'use strict';

    angular
        .module('vizeos')
        .controller('UsersController', UsersController);

    UsersController.$inject = [];

    /* @ngInject */
    function UsersController() {
        var vm = this;

        vm.data = {
            users: []
        };

        vm.ui = {
            canActive: function() {
                return true;
            }
        }
    }
})();
