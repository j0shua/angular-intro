(function () {
  'use strict';

  app.factory('AdvertiserService', ['$http', '$q',
    function AdvertiserService($http, $q) {

      function getAll() {
        var url = 'http://localhost:8081/advertisers',
          defer = $q.defer();

        $http.get(url)
          .success(function (advertisers) {
            defer.resolve(advertisers);
          })
          .error(function (err) {
            defer.reject(err);
          });

        return defer.promise;
      }

      return {
        getAll: getAll
      };
  }]);

}());
