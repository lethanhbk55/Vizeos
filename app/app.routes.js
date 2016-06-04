(function() {
    'use strict';

    angular.module('vizeos').config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('profile', {
            url: '/profile',
            views: {
                content: {
                    controller: 'ProfileController',
                    controllerAs: 'vm',
                    bindToController: true,
                    templateUrl: './modules/profile/profile.template.html',
                }
            }
        });

        $stateProvider.state('users', {
            url: '/users',
            views: {
                content: {
                    controller: 'UsersController',
                    controllerAs: 'vm',
                    bindToController: true,
                    templateUrl: './modules/users/users.template.html',
                }
            }
        });
    };
})();
