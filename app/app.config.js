(function() {
    'use strict';

    angular
        .module('vizeos')
        .config(config);

    config.$inject = ['$ocLazyLoadProvider'];

    function config($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: true,
            events: true,
            modules: [{
                name: 'home',
                files: ['./modules/home/home.controller.js']
            },{
                name: 'coming-soon',
                files: ['./shared/coming-soon/coming-soon.controller.js']
            }]
        });
    };
})();