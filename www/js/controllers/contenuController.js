'use strict';
var contenus =[
  {'img':'img/Suite.png','url':'https://www.youtube.com/embed/E_RUbIvzg8w','username':'Thierno Thiam','categorie':"CUISINE",'id':0,'description':"La cuisine est l\'ensemble des techniques de préparation des aliments en vue de leur consommation par les êtres humains (voir cuisinerie). La cuisine est diverse à travers le monde, fruit des ressources naturelles"},
  {'img':'img/Suite.png','url':'https://www.youtube.com/embed/QOhBf0J_tHI','username':'El hadji Bah','categorie':"Musique",'id':1},
  {'img':'img/Suite.png','url':'https://www.youtube.com/embed/VOEiVVZkQtE','username':'Ikane Challenge','categorie':"Informatique",'id':2},
  {'img':'img/Suite.png','url':'https://www.youtube.com/embed/iV6L-T5bbUo','username':'Khadim Diop','categorie':"Roller",'id':3},
  {'img':'img/Suite.png','url':'https://www.youtube.com/embed/3awa2O-4jU0','username':'Demba Sarr','categorie':"Maquillage",'id':4},
  {'img':'img/Suite.png','url':'https://www.youtube.com/embed/3awa2O-4jU0','username':'Coura Ba','categorie':"Dance",'id':5},
  {'img':'img/Suite.png','ulr':'https://www.youtube.com/embed/yM6IguQA_8w','username':'Fatou Fall','categorie':"Couture",'id':6},
  {'img':'img/Suite.png','url':'http://www.youtube.com/embed/JGVsF10esRg','username':'Adjaa Arame Mane','categorie':"Comptablité",'id':7},
  {'img':'img/Suite.png','url':'http://www.youtube.com/embed/UZ1umuljpEk','username':'Lissoune Ndiaye','categorie':"Marketing",'id':8},
  {'img':'img/Suite.png','url':'http://www.youtube.com/embed/B1j8aMChHug','username':'Mansour Baro','categorie':"Playstation",'id':9},
  {'img':'img/Suite.png','url':'http://www.youtube.com/embed/YGV6NkKDJ4o','username':'Mamadou Khoussa','categorie':"Manga",'id':10},
  {'img':'img/Suite.png','url':'http://www.youtube.com/embed/DBVTT8pY4Is','username':'Amath Bamba Mbacké','categorie':"Base de données",'id':11},
  {'img':'img/Suite.png','url':'http://www.youtube.com/embed/PukLH6ntR9c','username':'Sokhna Mbacké','categorie':"religion",'id':12},

];


app
  .controller('ContenuList',function($scope,$cordovaCamera){

    $scope.contenus = contenus;

    $scope.opencamera = function()
    {
      document.addEventListener("deviceready", function () {

        var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation:true,
          mediaType:2
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
          var image = document.getElementById('myImage');
          image.src = "data:image/jpeg;base64," + imageData;
        }, function(err) {
          // error
        });

      }, false);

    };

})
  .controller('ContenuView',function ($scope,$stateParams, $sce) {
    var id =$stateParams.id;
    $scope.contenu = contenus[id];
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
  })
  .controller('mescontenus',function($scope,$ionicModal,categoryProvider){
    // recuperation des categories pour faire le formulaires
    $scope.categories ={};
    categoryProvider.getAll(function(categories){
      $scope.categories = categories;
    })
    // modal de la creation d'un contenu
    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });


    $scope.addcontenu =function (contenu) {
      //console.log(contenu);
    }

  })

;
