(function () {
    'use strict';

    angular
        .module('app')
        .controller('baseController', baseController);

    baseController.$inject = ['$scope'];

    function baseController($scope) {
        $scope.test = 'test';

        ////////////
    }
})();