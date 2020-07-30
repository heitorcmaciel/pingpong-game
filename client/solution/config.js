angular
	.module('portal')
	.config(['$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider',
		function config($locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {

			// $locationProvider.hashPrefix('!');

			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Requested-With'];     

    	$stateProvider
			.state('index', {
					url: "/index",
					templateUrl: "views/main.html",
					data: { pageTitle: 'Example view', specialClass: 'gray-bg'}
			})
			.state('home', {
				abstract: true,
				url: "/home",
				templateUrl: "views/common/content.html",
			})
			.state('home.portal', {
				url: "/portal",
				templateUrl: "views/minor.html",
				data: { pageTitle: 'Example view' }
		})
			.state('404', {
				url: "/404",
				templateUrl: "views/404.html",
				data: { pageTitle: 'Not Found Page View', specialClass: 'gray-bg'}
		})

			
			$urlRouterProvider.otherwise("/index");
}])
.run(['$rootScope', 'AppState', '$state', function($rootScope, AppState, $state) {
	$rootScope.$state = $state;
	AppState.authToken = config_json.authToken;
	
	AppState.config = {
		serverUrl: config_json.serverUrl,
		debug: config_json.debug_mode,
		authenticationToken: config_json.authToken
	};

	// $rootScope.$on('appstateadd', function(listener, value) {
	// 	console.log('changing appstate');
	// })
}]);
