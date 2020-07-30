'use strict';

angular.module('app.httpRequest', [])


    .factory('TokenHandler', function(AppState, $http) {
        return {
            get : function() {
                return AppState.authToken;
            },
            set : function(token) {
                if(!AppState.home_mode) {
                    $http.defaults.headers.common['X-Auth-Token'] = token;
                }
            }
        }
    })

    .factory('SessionService', function( $resource, AppState, TokenHandler) {
        return $resource(AppState.config.restUrl + "sessions/",
            {},
            { 'login': {method: 'POST'}}
        )
    })    
 

    .factory('dummyRequestService', function( $resource, AppState, TokenHandler) {
        
		return $resource(AppState.config.restUrl + "fooRoute/:id",
			{}, {}
		)
	})        

    

