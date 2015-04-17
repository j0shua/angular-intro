(function () {
  'use strict';

  app.controller('AdvertisersController', ['$scope', 'AdvertiserService',
    function AdvertisersController($scope, AdvertiserService) {

      AdvertiserService.getAll()
        .then(function (advertisers) {
          $scope.advertisers = advertisers;
        })
        .catch(function (err) {
          console.error(err);
        });

    }]);

}());
