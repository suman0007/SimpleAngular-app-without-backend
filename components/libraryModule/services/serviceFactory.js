app.factory('myService', function($http, $q) {
	var service = {
            libraryData: [],
            getLibraries: getLibraries
        };
    return service;
    function getLibraries() {
            var def = $q.defer();
            $http.get('https://data.cityofchicago.org/resource/psqp-6rmg.json')
                .success(function(data) {
                    service.libraryData = data;
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed to get libraryData");
                });
            return def.promise;
        }
});
