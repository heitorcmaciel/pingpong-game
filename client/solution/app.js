'use strict';


var config_json = {
    "restUrl" : "http:\/\/localhost\\:3000\/",            
    "work_online" : true,
    "debug_mode" : true    
}


var app = angular.module('app', [    
    'app.appState',    
    'app.httpRequest',
    'app.filters',
    'app.websql',    
    'app.directives',    
    'app.debug'   

    //componentes AngularJS
    ,'ngResource'
    , 'ngRoute'

]).

    config(['$httpProvider', '$routeProvider', '$locationProvider',
        function($httpProvider, $routeProvider, $locationProvider) {   
			
		$httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];     
     
        $routeProvider.
            when('/home', {templateUrl: 'views/home.tpl.html', controller: 'baseCtrl'}).
            otherwise({redirectTo: '/home'});
    }])
    .run(function($http, AppState, WebSqlService, $rootScope, debug) {

        AppState.config = {};
        AppState.user = {};
       
        AppState.work_online = config_json.work_online;
        AppState.debug_mode = config_json.debug_mode;

		AppState.config.restUrl = config_json.restUrl;        

    })
