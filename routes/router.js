app .config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'components/libraryModule/views/login-form.html',
        controller: 'libController'
      }).
      otherwise({
        redirectTo: '',
        controller: ''
      });
  }]);