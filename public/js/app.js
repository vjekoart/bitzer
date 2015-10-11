/* global angular */

angular.module('bitzerApp', [
    'ngRoute',
    'ngAnimate',
    //'ui.bootstrap',
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

/* global angular */

angular.module('bitzer.controllers', [])

/**
 * Skeleton controller
 */
 // IMPORTANT: When adding modal window for newsletter, add dependency $uibModal
.controller('skeletonController', ['$scope', '$location', '$timeout', function ($scope, $location, $timeout) {
    var vm = this;
    vm.browse = false;
    vm.loading = true;

    vm.changeNav = function () {
        vm.browse = true;
    };

    $timeout(function () {
        vm.loading = false;

        if ($location.url() !== '/') {
            vm.browse = true;
        }
    }, 2000);

    /*vm.openModal = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            backdrop: true,
            controller: 'modalController as modal',
            size: 'md',
            templateUrl: 'templates/modules/newsletter.html',
            windowClass: 'newsletter'
        });

        modalInstance.result.then(function (result) {}, function (msg) {});
    };*/
}])


/**
 * Modal controller
 */
/*.controller('modalController', ['$scope', '$modalInstance', function () {
    var vm = this;

    vm.dismiss = function () {
        $modalInstance.dismiss();
    };
}])*/


/**
 * Error controller
 */
.controller('errorController', ['$scope', function ($scope) {
    var vm = this;
}])


/**
 * Page controller
 */
.controller('pageController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    var vm = this;

    vm.title = $routeParams.pageName;
}])


/**
 * News controller
 */
.controller('newsController', ['$scope', function ($scope) {
    var vm = this;
}])


/**
 * Music controller
 */
.controller('musicController', ['$scope', function ($scope) {
    var vm = this;
}])


/**
 * Gigs controller
 */
.controller('gigsController', ['$scope', function ($scope) {
    var vm = this;
}]);
