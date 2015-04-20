(function () {
  'use strict';

  app.factory('AdvertiserService', ['$http', '$q', '$timeout', '$log',
    function AdvertiserService($http, $q, $timeout, $log) {

      function getAll() {
        var url = '/advertisers',
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

      function get(id) {
        var url = '/advertisers/' + id,
          defer = $q.defer();

        $http.get(url)
          .success(function (advertiser) {
            defer.resolve(advertiser);
          })
          .error(function (err) {
            defer.reject(err);
          });

        return defer.promise;
      }

      function save(advertiser){
        var defer = $q.defer();

        $timeout(function (){
          $log.info('The advertiser was successfully saved: ', advertiser);
        }, 1000);

        return defer.promise;
      }

      return {
        getAll: getAll,
        get: get,
        save: save
      };

  }]);

}());
