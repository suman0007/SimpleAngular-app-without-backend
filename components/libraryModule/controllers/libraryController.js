var app = angular.module('myApp', ['ngRoute','ngMessages']);

app.controller('libController', function($scope,$location,$http,$q,myService) {
    $scope.person={};
    $scope.person.firstName = "";
    $scope.person.lastName = "";
    
    $scope.getProducts = function(){       
       //manually  creating promises
       /* var manualDefer = $q.defer();
        var httpPromise= $http.get('http://puppygifs.tumblr.co');
        httpPromise.then(function(resolveWith){
                         console.debug(properResponse);}
                    ,function(rejectWith){console.log(rejectWith);});*/            
        //using Service
		myService.getLibraries().then(function(promise) {
		console.log(promise);
		$scope.libraryData = promise;
		});                      
    }
	
	$scope.isLoginTrue = function(loginForm,person){
	 if(loginForm.$valid===true){
	   $location.url('/login');
	    $scope.person.firstName = person.firstName;
        $scope.person.lastName = person.firstName;
	 }
	}
   
	$scope.isChacked = function(checkStatus){
	  $scope.chacked=checkStatus;
	}
});