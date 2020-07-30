angular.module('portal')
	.controller('MainCtrl', ['$rootScope', '$scope', '$state', '$stateParams', MainCtrl]);
	
function MainCtrl($rootScope, $scope, $state, $stateParams) {

		$rootScope.logout = function() {
			console.log('dando logoff');
		}

};
