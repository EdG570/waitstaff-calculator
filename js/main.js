
(function() {
  var app = angular.module('myApp', ['ngMessages']);

  app.controller('CalcCtrl', ['$scope', function($scope) {
      $scope.tipsCount = 0;
      $scope.mealsCount = 0;
     

      $scope.submit = function() {

        $scope.price = document.getElementById('price').value;
        $scope.tax = document.getElementById('tax').value;
        $scope.tip = document.getElementById('tip').value;

        $scope.subTotal = parseInt($scope.price) + (parseInt($scope.price) * (parseInt($scope.tax) / 100));
        $scope.tipTotal = parseInt($scope.price) * (parseInt($scope.tip) / 100);
        $scope.total = $scope.subTotal + $scope.tipTotal;

        $scope.tipsCount += $scope.tipTotal;
        $scope.mealsCount++;
        $scope.avgTip = $scope.tipsCount / $scope.mealsCount;

        document.getElementById('price').value = '';
        document.getElementById('tax').value = '';
        document.getElementById('tip').value = '';

      };


      $scope.clearData = function() {
        $scope.subTotal = '';
        $scope.tipTotal = '';
        $scope.total = '';

        $scope.tipsCount = 0;
        $scope.mealsCount = 0;
        $scope.avgTip = 0;

        document.getElementById('price').value = '';
        document.getElementById('tax').value = '';
        document.getElementById('tip').value = '';

      };
  }]);

})();
