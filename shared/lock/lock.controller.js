(function() {
    'use strict';

    angular
        .module('vizeos')
        .controller('LockController', LockController);

    LockController.$inject = ['login.service'];

    /* @ngInject */
    function LockController($loginSvc) {
        var vm = this;

        vm.actions = {
            login: function() {
                $loginSvc.login();
            },
            logout: function() {
                $loginSvc.logout();
            }
        }
    }
})();
