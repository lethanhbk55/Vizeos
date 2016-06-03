(function() {
    'use strict';

    angular
        .module('vizeos')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            dotsEach: true,
            stagePadding: 11,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        });
    };
})();