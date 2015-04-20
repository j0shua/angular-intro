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

  app.controller('AdvertiserDetailsController', ['$scope', '$routeParams', '$location', 'AdvertiserService',
    function AdvertiserDetailsController($scope, $routeParams, $location, AdvertiserService) {
      var id = $routeParams.id;

      AdvertiserService.get(id)
        .then(function (advertiser) {
          $scope.advertiser = advertiser;
        })
        .catch(function (err) {
          console.error(err);
        });

        $scope.save = function (isValid) {
          if (isValid) {
            AdvertiserService.save($scope.advertiser)
              .then(function () {
                $location.path('/advertiser');
              });
          }
        };

    }]);

}());
