var app = angular.module('StringLengthFinderModule', []);
app.controller('StringLengthFinderController', function($scope) {
  $scope.myString = function(inputString) {
    $scope.inputString = inputString;
    if($scope.inputString !=null){
      $scope.inputStringSplit = inputString.split(' ');
      $scope.stringLength = 0;
      for (var i = 0; i < $scope.inputStringSplit.length; i++) {
        if($scope.inputStringSplit[i].length > $scope.stringLength){
          $scope.stringLength = $scope.inputStringSplit[i].length;
          $scope.longestString=$scope.inputStringSplit[i];
        }
      }
    }
    return $scope.longestString;
  }
});
