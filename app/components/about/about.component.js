angular.module('app').component('about', {
  templateUrl: 'app/components/about/about.html'
})  
.config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        name: 'about', 
        url: '/about', 
        component: 'about'
    });
});
