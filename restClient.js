

var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);

app.controller('myCtrl', function($scope, $http, $window) {
   

  // $scope.tabs = [
  //   { title:'Dynamic Title 1', content:'Dynamic content 1' },
  //   { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  // ];

    
  
  	$scope.urlField = "urllllll ";
          console.log("url ",urlField);


    $scope.callRestAPI = function(url){

    	console.log(" call Rest API");

    }
	$http.get('http://localhost:3000/quote/all').
	then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    	console.log(" data " , response);
		$scope.response = response.data;
		$scope.headers = response.headers();
		$scope.headerKey = response.headers("key1");
		
  });
});

