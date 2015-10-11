/* global angular */

angular.module('bitzerApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'bitzer.controllers'
])

/**
 * Routes
 */
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {

        })
        .when('/news', {
            templateUrl: './templates/news.html',
            controller: 'newsController as news'
        })
        .when('/music', {
            templateUrl: './templates/music.html',
            controller: 'musicController as music'
        })
        .when('/gigs', {
            templateUrl: './templates/gigs.html',
            controller: 'gigsController as gigs'
        })
        .when('/page/:pageName', {
            templateUrl: './templates/page.html',
            controller: 'pageController as page'
        })
        .otherwise({
            templateUrl: './templates/404.html',
            controller: 'errorController as error'
        });
}]);
