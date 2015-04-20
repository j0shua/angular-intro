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
      .when('/advertiser/:id/edit', {
        templateUrl : '/partials/advertiser_details.html',
        controller  : 'AdvertiserDetailsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}());
