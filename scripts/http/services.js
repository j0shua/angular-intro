'use strict';

angular.module('app')
	.factory('PeopleService', function($http, $q){

		function getAll(){
			var url = '/people',
				defer = $q.defer();

			$http.get(url)
				.success(function(people){
					defer.resolve(people);
				})

			return defer.promise;
		}


		return {
			getAll: getAll
		};
	})