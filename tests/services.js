describe("AdvertiserService", function() {
	var AdvertiserService;
	var httpBackend;
	var mockData = ['item1', 'item2'];

	beforeEach(module('app'));

	beforeEach(inject(function(_AdvertiserService_, $injector) {
		//cache the service
		AdvertiserService = _AdvertiserService_;
		// Set up the mock http service responses
		httpBackend = $injector.get('$httpBackend');
	}));

	describe('get method', function() {
		it('should make a request to /advertisers/ when get is called', function() {
			//define the request we expect the service to make
			httpBackend.whenGET('/advertisers/someId').respond(mockData);

			//call the method from the service
			AdvertiserService.get('someId').then(function(data) {
				//verify we got the data back we expected
				expect(data).toEqual(mockData);
			});
			//reset the httpBackend for the next test
			httpBackend.flush();
		});
	});
});