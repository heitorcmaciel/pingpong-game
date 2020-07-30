
app.controller('baseCtrl', ['$scope', 'AppState', 'debug', 'dummyRequestService', 
    function($scope, AppState, debug, dummyRequestService) {

    $scope.load = function() {      
		
        //ain't gonna do it right now! It's just a reminder!
		//$scope.fireEvents();
    }
    

    $scope.fireEvents = function() {

		debug.log('firing events');
        gestures.init();

        var elCanvas = document.getElementById("main");

        var container = $("#main").hammer({
            prevent_default: true,
            scale_treshold: 0,
            drag_min_distance: 0
        });
        
        container.bind("click", function(e) {
			console.log("click");
		});

		/*
        container.bind("hold", function(e) {
			console.log("hold");
            gestures.hold(e);
        });*/

        container.bind("transformstart", function(e) {
            gestures.transformstart(e);
        });

        container.bind("transform", function(e) {
            gestures.transform(e);
        });

        container.bind("transformend", function(e) {
            gestures.transformend(e);
        });

        container.bind("dragstart", function(e){
            gestures.dragstart(e);
        });

        container.bind("drag", function(e){
            gestures.drag(e);
        });

        container.bind("dragend", function(e){
            gestures.dragend(e);
        });

        container.bind("doubletap", function(e){
            gestures.doubletap(e);
        });


    }

   

    $scope.load();


}]);
