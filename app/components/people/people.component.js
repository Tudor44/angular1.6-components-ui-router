angular.module('app').component('people', {
  bindings: { people: '<' },
  
  templateUrl : 'app/components/people/people.html',

  controller : 'PeopleController'
})
.config(function ($stateProvider) {
    $stateProvider
      .state('people', {
        name: 'people', 
        url: '/people',
        component: 'people',
        resolve: {
          people: function($http) {
            return $http({method : 'GET', url : 'app/services/people.json'})
            .then(function success(people){
              return people.data;
            });
          }
        }
    });
});