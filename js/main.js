
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
        $rootScope.subTotal = parseInt($rootScope.price) + (parseInt($rootScope.price) * (parseInt($rootScope.tax) / 100));
        
        //Calculates tip cost
        $rootScope.tipTotal = parseInt($rootScope.price) * (parseInt($rootScope.tip) / 100);

        //Calculates total cost of tip + subtotal
        $rootScope.total = $rootScope.subTotal + $rootScope.tipTotal;

        $rootScope.tipsCount+= $rootScope.tipTotal;
        $rootScope.mealsCount++;
        $rootScope.avgTip = $rootScope.tipsCount / $rootScope.mealsCount;

        this.clearInputs();
      };

      $rootScope.tipsCount = 0;
      $rootScope.mealsCount = 0;

      //Clears form input fields
      this.clearInputs = function() {
        $rootScope.price = '';
        $rootScope.tax = '';
        $rootScope.tip = '';
      };
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
