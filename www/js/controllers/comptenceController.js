'use strict';

app
  .controller('mescompetences',function($scope,$rootScope,competenceProvider,categoryProvider,$ionicModal){
      // recuperation des competences
    $scope.competences = {};
    competenceProvider.mescompetence($rootScope.user.id,function (competences) {
      $scope.competences = competences;
    ;})
    // recuperation des categories pour faire le formulaires
    $scope.categories ={};
    categoryProvider.getAll(function(categories){
      $scope.categories = categories;
    });
    //creation du modal pour  creer uen nouvelle compétence
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });
    // fonction de creation d'une nouvelle compétence
    $scope.addcompetence = function (competence) {
      // on ajoute
      competenceProvider.addCompetence(competence,$rootScope.user.id);
      // on ferme le modale ici
      $scope.modal.hide();
      // mettre à jour la liste des
      competenceProvider.mescompetence($rootScope.user.id,function (competences) {
        $scope.competences = competences;
        ;})
    }

    // suprression
    $scope.supprimer = function (id) {
      console.log(id)
    }



  });
