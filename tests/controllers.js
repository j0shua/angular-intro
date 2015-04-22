describe('AdvertiserController', function() {
	var arrData = ['one', 'two'];

	var AdvertiserServiceMock;
	var $scope;

	beforeEach(module('app'));

	beforeEach(inject(function($q, $controller, $rootScope) {

		//mock the advertiser service
		AdvertiserServiceMock = {
			getAll: function() {
				var items = arrData;
				return $q.when(items);
			}
		};

		//create a new scope instance
		$scope = $rootScope.$new();

		//create an instance of the controller
		//and inject the instance of scope and the service mock
		$controller('AdvertiserController', {
			$scope: $scope,
			AdvertiserService: AdvertiserServiceMock
		});
	}));


	describe('advertisers', function() {
		it('uses the Advertiser service, to add a list of advertisers to scope', function() {

			$scope.$digest();
			expect($scope.advertisers).toEqual(arrData);

		});
	});
});