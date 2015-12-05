
(function() {
  var app = angular.module('myApp', ['ngMessages', 'ngRoute']);

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
        this.subTotal = parseInt(this.price) + (parseInt(this.price) * (parseInt(this.tax) / 100));
        
        //Calculates tip cost
        this.tipTotal = parseInt(this.price) * (parseInt(this.tip) / 100);

        //Calculates total cost of tip + subtotal
        this.total = this.subTotal + this.tipTotal;

        $rootScope.tipsCount+= this.tipTotal;
        $rootScope.mealsCount++;
        $rootScope.avgTip = $rootScope.tipsCount / $rootScope.mealsCount;
      };

      $rootScope.tipsCount = 0;
      $rootScope.mealsCount = 0;
  });

  app.controller('EarningsCtrl', function() {

  });








  app.controller('CalcCtrl', ['$scope', function($scope) {
      
      
     
      //On submit performs calculations for Customer Charges and My Earnings
      $scope.submit = function() {
        

        

        //Calculates avg tip
        $scope.avgTip = $scope.tipsCount / $scope.mealsCount;

        //Calls function to clear input fields
        $scope.clearInputs();

        

      };

      //Clears form input fields
      $scope.clearInputs = function() {
        $scope.price = '';
        $scope.tax = '';
        $scope.tip = '';
      };

      //Resets all data
      $scope.clearData = function() {
        $scope.subTotal = null;
        $scope.tipTotal = null;
        $scope.total = null;

        $scope.tipsCount = 0;
        $scope.mealsCount = 0;
        $scope.avgTip = 0; 

        $scope.clearInputs();

      };
  }]);

})();
