angular.module('app').component('home', {

  templateUrl: 'app/components/home/home.html',           
  controller: 'HomeController',
})
.config(function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        name: 'home', 
        url: '/home',
        component: 'home'
    });
});