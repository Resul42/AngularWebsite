


angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TypeaheadCtrl', function($scope, $http) {
	$scope.selected = "";
    $http.get("Processor.json").then(function(response){
 		$scope.componentsCPU = response.data;
    });


// Any function returning a promise object can be used to load values asynchronously
    $scope.gpuselected = "";
    $http.get("Graphicscard.json").then(function(response){
        $scope.componentsGPU = response.data;
    });

});



