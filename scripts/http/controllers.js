angular.module('app')
	.controller('DemoController', function(
		$scope, PeopleService){

		//$scope.people = PeopleService.getAll();

		PeopleService.getAll().then(function(people){
			$scope.people = people;

		})
	});