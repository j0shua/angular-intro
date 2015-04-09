angular.module('app')
	.controller('DemoController', function(
		$scope, PeopleService){

		//$scope.people = PeopleService.getAll();

		PeopleService.getAll().then(function(people){
			$scope.people = people;

		});

		$scope.addPerson = function(name, word){
			$scope.people.push({name: name, word: word});

			$scope.newPerson = {};
		};
	});