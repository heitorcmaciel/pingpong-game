var config_json = {            
    "serverUrl": "http:\/\/localhost:15000\/api\/v1\/",
		"debug_mode" : true,
   	"authToken" : "Basic dHJhZGVyZmxlZXQ6dFJhRDNyRmwzM1Q="
	};

angular.module('portal', [
	'ui.router',                    // Routing
	'ui.bootstrap',                 // Ui Bootstrap
	'ngResource',
	'ngRoute',
	'cgNotify'
]);

