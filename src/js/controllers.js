/* global angular */

angular.module('bitzer.controllers', [])

.controller('skeletonController', ['$scope', '$timeout', function ($scope, $timeout) {
    var vm = this;

    vm.loading = true;

    $timeout(function () {
        vm.loading = false;
    }, 3000);
}])

.controller('errorController', ['$scope', function ($scope) {}]);
