/*describe('Library Controller', function() {
    var scope;
    var mockService;
    var controller;
    var q;
    var deferred;

    // define the mock library service
   

    // inject the required services and instantiate the controller
    beforeEach(inject(function($rootScope, $controller, $q) {
        scope = $rootScope.$new();
        q = $q;
        controller = $controller(libraryController, {
            $scope: scope,
            myService: libraryService
        });
    }));

   
});*/


/*describe('People List Controller', function() {
    var scope;
    var peopleService;
    var controller;
    var q;
    var deferred;

    // define the mock people service
    beforeEach(function() {
        peopleService = {
            peopleStore: [{
                FirstName: "Jim",
                LastName: "Lavin",
                Email: "jlavin@jimlavin.net",
                Bio: "Creator and Host of Coding Smackdown TV"}],

            requestPeople: function() {
                deferred = q.defer();
                return deferred.promise;
            }
        };
    });

    // inject the required services and instantiate the controller
    beforeEach(inject(function($rootScope, $controller, $q) {
        scope = $rootScope.$new();
        q = $q;
        controller = $controller(PeopleListController, {
            $scope: scope,
            people: peopleService
        });
    }));

    it('should call requestPeople on the people service when init is called',

    function() {
        spyOn(peopleService, 'requestPeople').andCallThrough();

        scope.init();

        deferred.resolve();

        scope.$root.$digest();

        expect(peopleService.requestPeople).toHaveBeenCalled();
    });

    it('should populate the peopleList when init is called',

    function() {
        scope.init();

        deferred.resolve();

        scope.$root.$digest();

        expect(scope.peopleList).not.toBe([]);
    });
});*/