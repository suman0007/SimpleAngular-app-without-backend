app .config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '',
        controller: ''
      }).
      otherwise({
        redirectTo: 'login-form.html'
        controller: 'libController'
      });
  }]);