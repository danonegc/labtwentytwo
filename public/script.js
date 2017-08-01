var app = angular.module('newMod', []);
app.controller('newCtrl', function($scope, $http){

  $http({
    method: 'GET',
    url: '/languages'
  }).then(function (response){
    console.log(response);
    $scope.name = response.data;

  });


});
