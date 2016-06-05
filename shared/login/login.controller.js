(function() {
    'use strict';

    angular
        .module('vizeos')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['login.service'];

    /* @ngInject */
    function LoginController($loginSvc) {
        var vm = this;
        vm.ui = {
            status: "signing"
        };
        vm.data = {};
        vm.actions = {
            login: function() {
                $loginSvc.login();
            }
        };
    }
})();
