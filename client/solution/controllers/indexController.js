angular.module('portal')
	.controller('IndexCtrl', ['$rootScope', '$scope', '$state', IndexCtrl]);
	
function IndexCtrl($rootScope, $scope, $state) {

    $scope.init = function() {
      $scope.helloText = "Fried Bat";
		  $scope.descriptionText = "aqui vai ficar o conteudo de entrada do portal";
		
    }

    $scope.init();

};