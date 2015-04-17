(function(){
  'use strict';

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html'
      })
      .when('/advertisers', {
        templateUrl : '/partials/advertisers.html',
        controller  : 'AdvertisersController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}());
