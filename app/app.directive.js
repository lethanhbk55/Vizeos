(function () {
    'use strict';

    angular
        .module('vizeos')
        .directive('spinner', spinner)
        .directive('a', function () {
            return {
                restrict: 'E',
                link: function (scope, elem, attrs) {
                    if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                        elem.on('click', function (e) {
                            e.preventDefault(); // prevent link click for above criteria
                        });
                    }
                }
            }
        });

    function spinner($rootScope) {

        return {
            link: link,
        };

        function link(scope, element, attrs) {
            element.removeClass('hide');
            $('body').addClass('page-on-load');
            $rootScope.$on('$stateChangeStart', function () {
                element.removeClass('hide');
                $('body').addClass('page-on-load');
            });
            $rootScope.$on('$stateChangeSuccess', function () {
                element.addClass('hide');
                $('body').removeClass('page-on-load');
            });
            $rootScope.$on('$stateNotFound', function () {
                element.removeClass('hide');
                $('body').addClass('page-on-load');
            });
            $rootScope.$on('$stateChangeError', function () {
                console.info(arguments);
                element.removeClass('hide');
                $('body').addClass('page-on-load');
            });
        }
    };
})();