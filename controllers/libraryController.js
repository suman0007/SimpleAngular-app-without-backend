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
        
       /* $http.get('http://puppygifs.tumblr.com/api/read/json').
          success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.productData=data;
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });*/
        
       //manually  creating promises
       /* var manualDefer = $q.defer();
        var httpPromise= $http.get('http://puppygifs.tumblr.co');
        httpPromise.then(function(resolveWith){
                         console.debug(properResponse);}
                    ,function(rejectWith){console.log(rejectWith);});*/
        
        if(loginForm.$valid===true){
        //using Service
        myService.async().then(function() {
            $scope.libraryData = myService.data();
            $scope.isLogin = false;
          });
        }                    
    }
   
      $scope.isChacked = function(checkStatus){
          $scope.chacked=checkStatus;
      }
});