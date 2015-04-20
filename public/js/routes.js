(function(){
  'use strict';

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html'
      })
      .when('/advertiser', {
        templateUrl : '/partials/advertiser_list.html',
        controller  : 'AdvertiserController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}());
