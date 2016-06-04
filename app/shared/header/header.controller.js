(function() {
    'use strict';

    angular
        .module('vizeos')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['login.service'];

    /* @ngInject */
    function HeaderController($loginSvc) {
        var vm = this;
        vm.actions = {
            logout: function() {
                $loginSvc.logout();
            },
            lock: function() {
                $loginSvc.lock();
            }
        }
    }
})();
