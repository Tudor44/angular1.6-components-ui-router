angular.module('app').component('menuComponent', {
    // defines a two way binding in and out of the component
    bindings: {
      brand:'<'
     },
    // Load the template
    templateUrl: 'app/components/menu/menu.html',
    controller : 'MenuController'
});

