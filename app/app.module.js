(function() {
    angular.module('vizeos', ['ui.router', 'oc.lazyLoad', 'pascalprecht.translate', 'ngCookies'])
        .controller("AppController", ["$rootScope", "$scope", function($rootScope, $scope) {
            var vm = this;
            $scope.$on('$viewContentLoaded', function() {
                _.defer(function() {
                    App.initComponents();
                    Layout.init();
                })
            });
        }]);
})();
