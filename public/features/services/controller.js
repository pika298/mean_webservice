var app = angular.module('ServiceClientMaker', []);
app.controller('ServiceCtrl', function($scope) {

	// test 
    $scope.firstName = "John";
    $scope.lastName = "Doe";

	$scope.serviceClients = [
	  {name: 'post 1'},
	  {name: 'post 2'},
  	  {name: 'post 3'},
  	  {name: 'post 4'}
	];

    // push data to client
    //$scope.serviceClients = serviceClients;

     console.log("Service Console is working!")
});