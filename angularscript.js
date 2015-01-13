
angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TypeaheadCtrl', function($scope, $http) {
	$scope.selected = "";
    $http.get("JSON/PROCESSOR.json").then(function(response){
 		$scope.componentsCPU = response.data;
    });

// Any function returning a promise object can be used to load values asynchronously
    $scope.gpuselected = "";
    $http.get("JSON/GRAPHICSCARD.json").then(function(response){
        $scope.componentsGPU = response.data;
    });

    $scope.memoryselected = "";
    $http.get("JSON/MEMORY.json").then(function(response){
        $scope.componentsMemory = response.data;
    });

    $scope.motherboardselected = "";
    $http.get("JSON/MOTHERBOARD.json").then(function(response){
        $scope.componentsMotherboard = response.data;
    });

    $scope.memoryselected = "";
    $http.get("JSON/OPTICALDRIVE.json").then(function(response){
        $scope.componentsOD = response.data;
    });
    $scope.computer = {};
    $scope.update = function(selected) {
        $scope.computer = angular.copy(selected);
    };

});


