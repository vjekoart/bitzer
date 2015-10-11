/* global angular */

angular.module('bitzer.controllers', [])

/**
 * Skeleton controller
 */
.controller('skeletonController', ['$scope', '$timeout', '$uibModal', function ($scope, $timeout, $uibModal) {
    var vm = this;

    vm.loading = false;

    /*$timeout(function () {
        vm.loading = false;
    }, 3000);*/

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
.controller('modalController', ['$scope', '$modalInstance', function () {
    var vm = this;

    vm.dismiss = function () {
        $modalInstance.dismiss();
    };
}])


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
