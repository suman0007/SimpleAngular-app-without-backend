describe("true", function() {

  it("should return true", function() {   
    expect(true).toBeTruthy;
  });
});


describe('Testing services with $http dependency', function() {

    var service, httpBackend, returnData;

    beforeEach(module('myApp'));

    beforeEach(inject(function(_myService_, _$httpBackend_,_$q_) {
        service = _myService_;
        httpBackend = _$httpBackend_;
    }));
    
    // make sure no expectations were missed in tests.
      afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
      });

    it ('Service should be loaded', function() {
            expect(service).toBeDefined();
     });
    
     it('should send the msg and return the response.', function (){
        // set up some data for the http call to return and test later.
        var returnData = { excited: true };

        // expectGET to make sure this is called once.
        httpBackend.expectGET('https://data.cityofchicago.org/resource/psqp-6rmg.json').respond(returnData);

        // storing return data.
        var returnedPromise = returnData;

        // set up a handler for the response, that will put the result
        // into a variable in this scope for my test.
        var result;
      
        service.async().then(function() {
            result = service.data();
          });

        // flush the backend to "execute" the request to do the expectedGET assertion.
        httpBackend.flush();

        // checking the result. 
        expect(result).toEqual(returnData);
      });  
    
    //TODO:test using promises
});


