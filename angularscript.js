
angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TypeaheadCtrl', function($scope, $http) {
	$scope.selected = "";
    $http.get("JSON/mongodb-dumpCPU.json").then(function(response){
 		$scope.componentsCPU = response.data;
    });

// Any function returning a promise object can be used to load values asynchronously
    $scope.gpuselected = "";
    $http.get("JSON/mongodb-dumpGPU2.json").then(function(response){
        $scope.componentsGPU = response.data;
    });

    $scope.memoryselected = "";
    $http.get("JSON/mongodb-dumpMEMORY.json").then(function(response){
        $scope.componentsMemory = response.data;
    });

    $scope.computer = {};
    $scope.update = function(selected) {
        $scope.computer = angular.copy(selected);
    };

});


