var myApp = angular.module('app', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
});

myApp.run(function($http) {
  $http.get('app/services/people.json', { cache: true });
});