
(function() {
  var app = angular.module('myApp', ['ngMessages', 'ngRoute', 'ngAnimate']);

  app.config(function($routeProvider) {
      $routeProvider.when('/', {
          templateUrl: '/home.html',
          controller: 'HomeCtrl as home'
      })
      .when('/new-meal', {
        templateUrl: '/new-meal.html',
        controller: 'MealCtrl as meal'
      })
      .when('/my-earnings', {
        templateUrl: '/my-earnings.html',
        controller: 'EarningsCtrl as earnings'
      })
      .otherwise('/error', {
          template: '<h3>Error - Page Not Found</h3>'
      });
  });
 
  app.controller('HomeCtrl', function() {
      
  });

  app.controller('MealCtrl', function($rootScope) {
      this.submit = function() {
        //Calculates subtotal from base price and tax %
        $rootScope.subTotal = parseInt(this.price) + (parseInt(this.price) * (parseInt(this.tax) / 100));
        
        //Calculates tip cost
        $rootScope.tipTotal = parseInt(this.price) * (parseInt(this.tip) / 100);

        //Calculates total cost of tip + subtotal
        $rootScope.total = $rootScope.subTotal + $rootScope.tipTotal;

        $rootScope.tipsCount+= $rootScope.tipTotal;
        $rootScope.mealsCount++;
        $rootScope.avgTip = $rootScope.tipsCount / $rootScope.mealsCount;

        this.clearInputs();

        //Clears form input fields
        this.clearInputs = function() {
          meal.price = '';
          meal.tax = '';
          meal.tip = '';
        };
      };

      $rootScope.tipsCount = 0;
      $rootScope.mealsCount = 0;

      
  });

  app.controller('EarningsCtrl', function($rootScope) {
      //Resets all data
      this.clearData = function() {
        $rootScope.subTotal = null;
        $rootScope.tipTotal = null;
        $rootScope.total = null;

        $rootScope.tipsCount = 0;
        $rootScope.mealsCount = 0;
        $rootScope.avgTip = 0; 

      };

  });

})();
