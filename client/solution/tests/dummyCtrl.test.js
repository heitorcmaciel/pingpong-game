describe('dummyCtrl unit tests' , function() {

	beforeEach(module('app'));

	var dummyCtrl, scope;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();

		dummyCtrl = $controller('dummyCtrl', {
			$scope: scope
		});
	}));

	it('says hello Papaguena!', function () {		
		expect(scope.foo).toEqual('Hello Papaguena!');		
		
	});

});