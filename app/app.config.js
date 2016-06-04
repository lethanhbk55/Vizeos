(function() {
    'use strict';

    angular
        .module('vizeos')
        .config(config);

    config.$inject = ['$ocLazyLoadProvider'];

    function config($ocLazyLoadProvider) {};
})();
