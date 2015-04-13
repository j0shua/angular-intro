'use strict';

angular.module('app')
	.factory('PeopleService', function($timeout, $q){
		var people = [
			{'name': 'josh', 'word': 'awesome'}, 
			{'name': 'vanessa', 'word': 'phenominal'},
			{'name': 'jp', 'word': 'jpjpjppjpjpj'},
			{'name': 'anton', 'word': 'anton anton anton'},
			{'name': 'garreth', 'word': 'garreth garreth garreth'},
			{'name': 'paul', 'word': 'paul paul paul'},
			{'name': 'stan', 'word': 'stan stan stan'},
			{'name': 'santiago', 'word': 'santiago santiago'},
			{'name': 'tomas', 'word': 'tomas'},
			{'name': 'ramiro', 'word': 'ramiro ramiro'},
			{'name': 'julieta', 'word': 'julieta julieta'}
		];

		function getAll(){
			var defer = $q.defer();

			$timeout(function(){
				defer.resolve(people);

			}, 1000);

			return defer.promise;
		}


		return {
			getAll: getAll
		};
	})