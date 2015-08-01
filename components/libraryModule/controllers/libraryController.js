var app = angular.module('myApp', ['ngRoute','ngMessages']);

app.controller('libController', function($scope,$location,$http,$q,myService) {
    $scope.person={};
    $scope.isLogin = true;
    $scope.person.firstName = "";
    $scope.person.lastName = "";
    $scope.fullName = function() {
        return $scope.person.firstName + " " + $scope.person.lastName;
    }
    
    $scope.getProducts = function(loginForm){
        
       //manually  creating promises
       /* var manualDefer = $q.defer();
        var httpPromise= $http.get('http://puppygifs.tumblr.co');
        httpPromise.then(function(resolveWith){
                         console.debug(properResponse);}
                    ,function(rejectWith){console.log(rejectWith);});*/
        
        if(loginForm.$valid===true){
        //using Service
       $scope.receivedData = myService.async().then(function() {
            $scope.libraryData = myService.data();
            $scope.isLogin = false;
          });
        }                    
    }
   
      $scope.isChacked = function(checkStatus){
          $scope.chacked=checkStatus;
      }
});