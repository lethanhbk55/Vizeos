(function() {
    'use strict';

    angular
        .module('vizeos')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$rootScope', 'login.service'];

    /* @ngInject */
    function ProfileController($rootScope, $loginSvc) {
        var vm = this;

        vm.data = {
            profile: _.cloneDeep($rootScope.globals.profile)
        };

        vm.actions = {
            update: function(profile) {
                $loginSvc.setCredentials(profile);
                vm.data.profile = _.cloneDeep($rootScope.globals.profile);
            },
            cancel: function() {
                vm.data.profile = _.cloneDeep($rootScope.globals.profile);
            }
        }
    }
})();
