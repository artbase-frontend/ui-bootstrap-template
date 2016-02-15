(function () {
    'use strict';

    angular
        .module('app')
        .controller('FeedController', FeedController);

    //FeedController.$inject = [''];

    function FeedController() {
        var vm = this;

        vm.testFeed = 'test feed';

        ////////////
    }
})();