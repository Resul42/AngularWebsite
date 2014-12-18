
angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TypeaheadCtrl', function($scope, $http) {
	$scope.selected = "";
    $http.get("JSON/Processor.json").then(function(response){
 		$scope.componentsCPU = response.data;
    });
    $scope.master = {};
    $scope.update = function(selected) {
        $scope.master = angular.copy(selected);
    };

// Any function returning a promise object can be used to load values asynchronously
    $scope.gpuselected = "";
    $http.get("JSON/Graphicscard.json").then(function(response){
        $scope.componentsGPU = response.data;
    });

});


