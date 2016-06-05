(function() {
    'use strict';

    angular
        .module('vizeos')
        .factory('login.service', LoginService);

    LoginService.$inject = ['$cookies', '$rootScope', '$http', '$q', '$location'];

    /* @ngInject */
    function LoginService($cookies, $rootScope, $http, $q, $location) {
        var service = {
            setCredentials: setCredentials,
            clearCredentials: clearCredentials,
            login: login,
            logout: logout,
            lock: lock
        };
        return service;

        ////////////////

        function setCredentials(profile) {            
            var authdata = Base64.encode(profile.Username + ':' + profile.Password);             
            $rootScope.globals = {
                profile: profile,
                status: 'logged'
            };             
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;            
            $cookies.putObject('globals', $rootScope.globals);        
        };

        function clearCredentials() {            
            $rootScope.globals = {};            
            $cookies.remove('globals');            
            $http.defaults.headers.common.Authorization = 'Basic';        
        };

        function login(username, password) {
            return $q.when({
                Avatar: './assets/imgs/avatar.jpg',
                Username: 'sonseait',
                Password: '1',
                DisplayName: 'Lê Công Sơn'
            }).then(function(profile) {
                return service.setCredentials(profile);
            }).then(function() {
                $location.path('users')
            });
        };

        function lock() {
            $rootScope.globals.status = 'locked';
            $cookies.putObject('globals', $rootScope.globals);
            $location.path('/');
        };

        function logout() {
            clearCredentials();
            $location.path('/');
        };
    }
})();
