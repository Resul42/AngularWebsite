
angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TypeaheadCtrl', function($scope, $http) {
	$scope.selected = "";
<<<<<<< HEAD
    $http.get("JSON/PROCESSOR.json").then(function(response){
=======
    $http.get("JSON/mongodb-dumpCPU.json").then(function(response){
>>>>>>> 0cf9df83a462c5ae45aa532fb6d3f90df15c891f
 		$scope.componentsCPU = response.data;
    });

// Any function returning a promise object can be used to load values asynchronously
    $scope.gpuselected = "";
<<<<<<< HEAD
    $http.get("JSON/GRAPHICSCARD.json").then(function(response){
=======
    $http.get("JSON/mongodb-dumpGPU2.json").then(function(response){
>>>>>>> 0cf9df83a462c5ae45aa532fb6d3f90df15c891f
        $scope.componentsGPU = response.data;
    });

    $scope.memoryselected = "";
<<<<<<< HEAD
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
=======
    $http.get("JSON/mongodb-dumpMEMORY.json").then(function(response){
        $scope.componentsMemory = response.data;
    });

>>>>>>> 0cf9df83a462c5ae45aa532fb6d3f90df15c891f
    $scope.computer = {};
    $scope.update = function(selected) {
        $scope.computer = angular.copy(selected);
    };

});


