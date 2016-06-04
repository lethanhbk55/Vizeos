(function() {
    'use strict';

    angular
        .module('vizeos')
        .factory('login.service', LoginService);

    LoginService.$inject = ['$cookieStore', '$rootScope', '$http', '$q', '$state', '$location'];

    /* @ngInject */
    function LoginService($cookieStore, $rootScope, $http, $q, $state, $location) {
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
            $cookieStore.put('globals', $rootScope.globals);        
        };

        function clearCredentials() {            
            $rootScope.globals = {};            
            $cookieStore.remove('globals');            
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
                $state.go('users', {}, { reload: true });
            });
        };

        function lock() {
            $rootScope.globals.status = 'locked';
            $cookieStore.put('globals', $rootScope.globals);
            $location.path('/');
        };

        function logout() {
            clearCredentials();
            $location.path('/');
        };
    }
})();
