angular.module('app')
	.controller('DemoController', function PeopleService($scope, PeopleService){

		//$scope.people = PeopleService.getAll();

		PeopleService.getAll().then(function(people){
			$scope.people = people;

		})
	});