function menuController () {

      this.menus = [{
        name: "Home",
        component: "home"
      },
       {
        name: "People",
        component: "people"
      },
      {
        name: "About",
        component: "about"
      }];
    }
    
angular.module('app')
       .controller('MenuController', 
                      menuController);
