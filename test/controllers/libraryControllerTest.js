
describe('Testing services with $http dependency', function() {

    var ctrl,service,$scope,$rootScope,serviceMock;

    beforeEach(function (){
        serviceMock = jasmine.createSpyObj('service', ['async']);
        module('myApp')
    });
    
    beforeEach(inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();   
        serviceMock.async.and.returnValue('expected');
        ctrl = $controller('libController', {
        $scope: $scope,
        serviceMock: serviceMock
      });
   }));

    
    it('is now a lot easier', function() {
        var loginForm = {};
        expect(ctrl).toBeDefined();
        var returnedResult= serviceMock.async();
        expect(returnedResult).toBe('expected');
        
        $scope.getProducts(loginForm);
        expect(serviceMock.async).toHaveBeenCalled(); 
        expect($scope.receivedData).toEqual(undefined);//login form is not valid
    });
    
    it('is now a lot easier', function() {
        $scope.isChacked(true);
        expect($scope.chacked).toEqual(true);
    });     
});
