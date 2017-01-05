function homeController() {
    this.greeting = 'hello';
    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
}
angular
  .module('app')
  .controller('HomeController', homeController);

