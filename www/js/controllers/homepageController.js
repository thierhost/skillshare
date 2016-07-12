'use strict';

app
	.controller('homepageIndex',function($scope,userProvider){
	// le controller de la page daccueil index qui correspondra à la page de connexion
	  $scope.user ={};
    // fonction de connexion
    $scope.connexion = function(user){
      userProvider.connexion(user)
    }

})
 .controller('homepageInscription',function ($scope,userProvider) {
   // fonction de creation de compte
   $scope.inscription = function (user) {
     userProvider.inscription(user);
   }
 })
;
