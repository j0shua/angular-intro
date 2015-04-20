(function () {
  'use strict';

  app.controller('AdvertiserController', ['$scope', 'AdvertiserService',
    function AdvertiserController($scope, AdvertiserService) {

      AdvertiserService.getAll()
        .then(function (advertisers) {
          $scope.advertisers = advertisers;
        })
        .catch(function (err) {
          console.error(err);
        });

    }]);

}());
