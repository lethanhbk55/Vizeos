(function() {
    'use strict';

    angular
        .module('vizeos')
        .directive('spinner', spinner)
        .directive('a', function() {
            return {
                restrict: 'E',
                link: function(scope, elem, attrs) {
                    if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                        elem.on('click', function(e) {
                            e.preventDefault(); // prevent link click for above criteria
                        });
                    }
                }
            }
        }).directive('dropdownMenuHover', function() {
            return {
                link: function(scope, element, attrs) {
                    element.dropdownHover();
                }
            };
        });

    function spinner($rootScope, $cookies, $location, $http) {

        return {
            link: link,
        };

        function link(scope, element, attrs) {
            element.addClass('hide');
            $('body').removeClass('page-on-load');

            $rootScope.$on('$stateChangeStart', function() {
                $rootScope.globals = $cookies.getObject('globals');
                if (!!$rootScope.globals && !!$rootScope.globals.profile) {
                    $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.profile.authdata;
                } else {
                    if ($location.$$path !== '/') {
                        $location.path('/');
                    };
                };
                element.removeClass('hide');
                $('body').addClass('page-on-load');
            });
            $rootScope.$on('$stateChangeSuccess', function() {
                element.addClass('hide');
                $('body').removeClass('page-on-load');
                _.defer(function() {
                    App.init();
                });
            });
            $rootScope.$on('$stateNotFound', function() {
                element.removeClass('hide');
                $('body').addClass('page-on-load');
            });
            $rootScope.$on('$stateChangeError', function() {
                console.info(arguments);
                element.removeClass('hide');
                $('body').addClass('page-on-load');
            });
        }
    };
})();
