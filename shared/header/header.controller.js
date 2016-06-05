(function() {
    'use strict';

    angular
        .module('vizeos')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope', 'login.service'];

    /* @ngInject */
    function HeaderController($scope, $loginSvc) {

        $scope.$on('$includeContentLoaded', function() {
            Layout.initHeader(); // init header
        });

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
