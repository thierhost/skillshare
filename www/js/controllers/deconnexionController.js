'use strict';
app
  .controller('deconnexion',function ($scope,$location,$rootScope) {
    $rootScope.user ={};
    $location.path('/');

})
