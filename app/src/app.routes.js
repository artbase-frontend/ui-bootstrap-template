(function () {
    'use strict';

    angular
        .module('app')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'src/layout/wrapper/wrapper.html',
                url: ''
            })
            .state('app.feed', {
                url: '/',
                templateUrl: 'src/components/feed/feed.html',
                controller: 'FeedController',
                controllerAs: 'FeedCtrl'
            });

        ////////////////

        function testToResolve() {

        }
    }
})();
