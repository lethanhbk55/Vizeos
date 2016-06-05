(function() {
    angular.module('vizeos', ['ui.router', 'oc.lazyLoad', 'pascalprecht.translate', 'ngCookies', 'kendo.directives'])
        .run(['$rootScope', '$cookies', function($rootScope, $cookies) {
            $rootScope.globals = $cookies.getObject('globals');
        }])
        .controller('AppController', ['$rootScope', '$scope', function($rootScope, $scope) {
            var vm = this;
            $scope.$on('$viewContentLoaded', function() {
                App.initComponents();
            });
        }]);
})();
