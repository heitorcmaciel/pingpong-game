angular.module('portal')
	.service('TokenHandler', ['AppState', '$http',
		function TokenHandler(AppState, $http) {
			return {
					get: function() {
						return AppState.authToken;
					},
					set: function(token) {
						$http.defaults.headers.common['Authorization'] = AppState.authToken;
					}
			}
		}
	])
	.service('CustomerIdHandler', ['AppState', '$http',
		function CustomerIdHandler(AppState, $http) {
			return {
					get: function() {
						return AppState.customerId;
					},
					set: function(value) {
						AppState.customerId = value;
					}
			}
		}
	]).
	service('EmailNotification', ['$resource', 'AppState', 'TokenHandler',
		function( $resource, AppState, TokenHandler) {
			return $resource(AppState.config.keycloakUrl + "notifyemail",
				{ email: '@email'},
				{ 
					post: {
						method: 'POST',
						params: {
							email: '@email'
						}
					}
				}
			)
		}
	]).
	service('SessionService', ['$resource', 'AppState', 'TokenHandler',
		function($resource, AppState, TokenHandler) {
			
			return $resource(AppState.config.keycloakUrl + "keycloak/getsessions",
				null,
				{ 
					post: {
						headers: { 'Authorization': AppState.authToken },
						method: 'POST',
						params: {
							username: '@username',
						}
					}
				}
			)
		}
	]).
	service('LoginService', ['$resource', 'AppState', 'TokenHandler', '$http',
	function($resource, AppState, TokenHandler, $http) {
		
		$http.defaults.headers.common['Authorization'] = AppState.authToken;
		return $resource(AppState.config.keycloakUrl + "keycloak/login",
			null,
			{ 
				post: {
					headers: { 'Authorization': AppState.authToken },
					method: 'POST',
					params: {
						username: '@username',
						password: '@password',
						grant_type: 'password', 
						client_id: AppState.config.clientName
					}
				}
			}
		)
	}
]).
service('LogoffService', ['$resource', 'AppState', 'TokenHandler',
function($resource, AppState, TokenHandler) {
	
	return $resource(AppState.config.keycloakUrl + "keycloak/logoff",
		null,
		{ 
			post: {
				headers: { 'Authorization': AppState.authToken },
				method: 'POST',
				params: {
					username: '@userid'
				}
			}
		}
	)
}
]).
service('CreateUserService', ['$resource', 'AppState', 'TokenHandler',
function($resource, AppState, TokenHandler) {
	
	return $resource(AppState.config.keycloakUrl + "keycloak/createuser/simple",
		null,
		{ 
			post: {
				headers: { 'Authorization': AppState.authToken },
				method: 'POST',
				params: {
					user: '@user'
				}
			}
		}
	)
}
]).
service('ConfirmEmailService', ['$resource', 'AppState', 'TokenHandler',
function($resource, AppState, TokenHandler) {
	
	return $resource(AppState.config.keycloakUrl + "keycloak/updateuser",
		null,
		{ 
			post: {
				headers: { 'Authorization': AppState.authToken },
				method: 'POST',
				params: {
					user: '@user'
				}
			}
		}
	)
}
]).
service('InvitationService', ['$resource', 'AppState', 'TokenHandler',
function($resource, AppState, TokenHandler) {

	return $resource(AppState.config.customerUrl + "invitation",
		null,
		{ 
			get: {
				headers: { 'Authorization': AppState.authToken },
				url: AppState.config.customerUrl + "invitation/:inviteid",
				method: 'GET'
			},
			put: {
				headers: { 'Authorization': AppState.authToken },
				url: AppState.config.customerUrl + "invitation/confirm/:inviteid",
				method: 'PUT',
				params: {
					invite: '@invite'
				}
			}
		}
	)
}
]).
service('NFService', ['$resource', 'AppState', 'TokenHandler',
function($resource, AppState, TokenHandler) {

	return $resource(AppState.config.customerUrl + "notas",
		{ criterium: '@criterium', customerid: '@customerid' },
		{ 
			recebidas: {
				headers: { 'Authorization': AppState.authToken },
				url: AppState.config.customerUrl + "notas/recebidas?:criterium",
				method: 'GET'
			},
			processadas: {
				headers: { 'Authorization': AppState.authToken },
				url: AppState.config.customerUrl + "notas/processadas?:criterium",
				method: 'GET'
			},
			emitidas: {
				headers: { 'Authorization': AppState.authToken },
				url: AppState.config.customerUrl + "notas/emitidas?:criterium",
				method: 'GET'
			},
			quarentena: {
				headers: { 'Authorization': AppState.authToken },
				url: AppState.config.customerUrl + "notas/quarentena?:criterium",
				method: 'GET'
			},
			download: {
				headers: { 'Authorization': AppState.authToken },
				url: AppState.config.customerUrl + "nf/s3/:bucket/link/:name",
				method: 'GET'
			},
			status: {
				headers: { 'Authorization': AppState.authToken },
				url: AppState.config.customerUrl + "nf/status/:trackerid",
				method: 'GET'
			}
		}
	)
}
]).
	service('UserDataService', ['$resource', 'AppState', 'TokenHandler',
		function($resource, AppState, TokenHandler) {
			
			return $resource(AppState.config.keycloakUrl + "keycloak/getuserprofile",
				null,
				{ 
					byEmail: {
						headers: { 'Authorization': AppState.authToken },
						url: AppState.config.keycloakUrl + "keycloak/getuserprofile",
						method: 'POST',
						params: {
							email: '@email'
						}
					},
					post: {
						headers: { 'Authorization': AppState.authToken },
						url: AppState.config.keycloakUrl + "keycloak/getuserprofile",
						method: 'POST',
						params: {
							username: '@username'
						}
					},
					complimentary: {
						headers: { 'Authorization': AppState.authToken },
						url: AppState.config.customerUrl + "companies?",
						method: 'GET'
					}
				}
			)
		}
	]).
	service('UserDataByIDService', ['$resource', 'AppState', 'TokenHandler',
	function($resource, AppState, TokenHandler) {
		
		return $resource(AppState.config.keycloakUrl + "keycloak/finduserbyid",
			null,
			{ 
				post: {
					headers: { 'Authorization': AppState.authToken },
					method: 'POST',
					params: {
						iduser: '@iduser'
					}
				}
			}
		)
	}
]).
	service('resetPwdService', ['$resource', 'AppState', 'TokenHandler',
	function($resource, AppState, TokenHandler) {
		
		return $resource(AppState.config.keycloakUrl + "keycloak/resetpassword",
			null,
			{ 
				post: {
					headers: { 'Authorization': AppState.authToken },
					method: 'POST',
					params: {
						email: '@email'
					}
				}
			}
		)
	}
]).
service('resendConfirmEmailService', ['$resource', 'AppState', 'TokenHandler',
function($resource, AppState, TokenHandler) {
	
	return $resource(AppState.config.keycloakUrl + "keycloak/confirmemail",
		null,
		{ 
			post: {
				headers: { 'Authorization': AppState.authToken },
				method: 'POST',
				params: {
					userid: '@userid',
					useremail: '@useremail'
				}
			}
		}
	)
}
]).
service('updatePwdService', ['$resource', 'AppState', 'TokenHandler',
function($resource, AppState, TokenHandler) {
	
	return $resource(AppState.config.keycloakUrl + "keycloak/updatepassword",
		null,
		{ 
			post: {
				headers: { 'Authorization': AppState.authToken },
				method: 'POST',
				params: {
					email: '@username',
					password: '@password'
				}
			}
		}
	)
}
]).
	service('plansService', ['$resource', 'AppState', 'TokenHandler',
	function( $resource, AppState, TokenHandler) {
		
		return $resource(AppState.config.stripeUrl + "stripe/listplans",
			null, {
				get: {
					headers: { 'Authorization': AppState.authToken },
					method: 'GET',
				}
			}
		)
	}
]).
service('typeAheadService', ['$resource', 'AppState', 'TokenHandler',
function( $resource, AppState, TokenHandler) {
	
	return $resource(AppState.config.customerUrl + "typeahead/:usercriterium/type/:criteriumtype",
		{ usercriterium: '@usercriterium', criteriumtype: '@criteriumtype' }, {
			get: {
				headers: { 'Authorization': AppState.authToken },
				method: 'GET',
			}
		}
	)
}
]).
	service('invoiceService', ['$resource', 'AppState', 'TokenHandler',
	function( $resource, AppState, TokenHandler) {
		
		return $resource(AppState.config.stripeUrl + "stripe/listinvoices/:customerid",
			{ customerid: '@customerid' }, {
				get: {
					headers: { 'Authorization': AppState.authToken },
					method: 'GET',
				}
			}
		)
	}
]).
	service('receiptsService', ['$resource', 'AppState', 'TokenHandler',
	function( $resource, AppState, TokenHandler) {
		
		return $resource(AppState.config.stripeUrl + "stripe/listpayments/:customerid",
			{ customerid: '@customerid' }, {
				get: {
					headers: { 'Authorization': AppState.authToken },
					method: 'GET',
				}
			}
		)
	}
]).
	service('subscriptionService', ['$resource', 'AppState', 'TokenHandler',
	function($resource, AppState, TokenHandler) {
		
		return $resource(AppState.config.stripeUrl + "stripe/createsubscription",
			{ customerid: '@customerid' },
			{ 
				list: {
					headers: { 'Authorization': AppState.authToken },
					url: AppState.config.stripeUrl + "stripe/subscription/:customerid",
					method: 'GET'
				},
				create: {
					headers: { 'Authorization': AppState.authToken },
					url: AppState.config.stripeUrl + "stripe/createsubscription",
					method: 'POST',
					params: {
						subscriptiondata: '@subscriptiondata'
					}
				},
				cancel: {
					headers: { 'Authorization': AppState.authToken },
					url: AppState.config.stripeUrl + "stripe/cancelsubscription",
					method: 'POST',
					params: {
						subscriptionid: '@subscriptionid'
					}
				},
				change: {
					headers: { 'Authorization': AppState.authToken },
					url: AppState.config.stripeUrl + "stripe/subscription/change",
					method: 'POST',
					params: {
						subscriptionid: '@subscriptionid',
						newplanid: '@newplanid'
					}
				},
				reactivate: {
					headers: { 'Authorization': AppState.authToken },
					url: AppState.config.stripeUrl + "stripe/subscription/reactivate",
					method: 'POST',
					params: {
						subscriptionid: '@subscriptionid',
						planid: '@planid'
					}
				}
			}
		)
	}
	]).
	service('paymentmethodService', ['$resource', 'AppState', 'TokenHandler',
		function($resource, AppState, TokenHandler) {
			
			return $resource(AppState.config.stripeUrl + "stripe/attachpaymentmethod",
				null,
				{ 
					post: {
						headers: { 'Authorization': AppState.authToken },
						url: AppState.config.stripeUrl + "stripe/attachpaymentmethod",
						method: 'POST',
						params: {
							paymentmethod: '@paymentmethod'
						}
					},
					add: {
						headers: { 'Authorization': AppState.authToken },
						url: AppState.config.stripeUrl + "stripe/addpaymentmethod",
						method: 'POST',
						params: {
							paymentdata: '@paymentdata'
						}
					}
				}
			)
			
		}
	]).
	service('RolesService', ['$resource', 'AppState', 'TokenHandler',
	function( $resource, AppState, TokenHandler) {
		
		return $resource(AppState.config.keycloakUrl + "keycloak/roles/all",
			{ clientId: AppState.config.clientId, companyId: '@companyId' }, {
				all: {
					headers: { 'Authorization': AppState.authToken },
					method: 'GET',
				},
				for: {
					headers: { 'Authorization': AppState.authToken },
					url: AppState.config.keycloakUrl + "keycloak/composite/client/:clientId/roles/for/:companyId",
					method: 'GET',
					params: {
						clientId: AppState.config.clientId, 
						companyId: '@companyId'
					}
				}
			}
		)
	}
]).
service('UserFormService', ['$resource', 'AppState', 'TokenHandler',
function( $resource, AppState, TokenHandler) {
	
	return $resource(AppState.config.customerUrl + "user/form/:userid",
		{ userid: '@userid' }, {
			post: {
				headers: { 'Authorization': AppState.authToken },
				method: 'POST',
				params: {
					userdata: '@userdata'
				}
			}
		}
	)
}
]);


    

