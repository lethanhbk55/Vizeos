(function () {
    'use strict';

    angular.module('vizeos').config(config);

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/comming-soon');

        $stateProvider.state('home', {
            url: '/',
            views: {
                content: {
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    templateUrl: './modules/home/home.template.html',
                }
            },
            resolve: {
                loader: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('home');
                }
            }
        }).state('coming-soon', {
            url: '/coming-soon',
            views: {
                content: {
                    controller: 'ComingSoonController',
                    controllerAs: 'vm',
                    templateUrl: './shared/coming-soon/coming-soon.template.html'
                }
            },
            resolve: {
                loader: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('coming-soon');
                }
            }
        })
    };
})();