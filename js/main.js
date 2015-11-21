
(function() {
  var app = angular.module('myApp', ['ngMessages']);

  app.controller('CalcCtrl', ['$scope', function($scope) {
      $scope.tipsCount = 0;
      $scope.mealsCount = 0;
     
      //On submit performs calculations for Customer Charges and My Earnings
      $scope.submit = function() {
        //Calculates subtotal from base price and tax %
        $scope.subTotal = parseInt($scope.price) + (parseInt($scope.price) * (parseInt($scope.tax) / 100));
        
        //Calculates tip cost
        $scope.tipTotal = parseInt($scope.price) * (parseInt($scope.tip) / 100);

        //Calculates total cost of tip + subtotal
        $scope.total = $scope.subTotal + $scope.tipTotal;

        //Keeps a running tally of total tips
        $scope.tipsCount += $scope.tipTotal;

        //Keeps count of number of meals served
        $scope.mealsCount++;

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
