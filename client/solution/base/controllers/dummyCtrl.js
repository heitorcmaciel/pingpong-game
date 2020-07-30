app.controller('dummyCtrl', ['$scope', 'dummyRequestService', 'AppState', 'debug', function($scope, dummyRequestService, AppState, debug) {

	//Reference Link: http://geradormemes.com/media/created/bct9uy.jpg
	$scope.foo = "Hello Papaguena!";



	//simple howto use my Rest Access Service
	$scope.bar = function()
	{
		// Do not attempt to use it as is! It's a mere how to, the actual Rest Adress does NOT exist
		// dummyRequestService.get({id : "JohnDoe"}, function(data) {                                   
  		// console.log('data: ', JSON.stringify(data));
  		//  });    

	}


	$scope.bar();



}]);