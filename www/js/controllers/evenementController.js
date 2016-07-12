'use strict';

var evenements = [
  {'id':0,'img':'img/Suite.png','libelle':'Anniversaire de Fanatik Roller. Journée porte ouverte.','description':'Formation en roller','dateDebut':'Jeudi à 9h00','dateFin':'Samedi à  13h00h','lieu':'HML Grand Dakar' },
  {'id':1,'img':'img/Suite.png','libelle':'Olympiade des Yayes','description':'Comment se maquiller naturellement','dateDebut':'Lundi à 9h00','dateFin':'Lundi à  13h00h','lieu':'ESP Dakar' },
  {'id':2,'img':'img/Suite.png','libelle':'Séance sur les bases de la photographie à Dakar','description':'Séance de photographie','dateDebut':'Dimanche à 9h00','dateFin':'Diamnche à  13h00h' ,'lieu':'Dakar'},
  {'id':3,'img':'img/Suite.png','libelle':'ShowCase de Rap avec Youssoupha','description':'Showcase de Musique','dateDebut':'Samedi à 9h00','dateFin':'Samedi à  13h00h','lieu':'Saint Louis' },
  {'id':4,'img':'img/Suite.png','libelle':'Evenement de promotion du Hijab','description':'Hijab Day','dateDebut':'Samedi à 9h00','dateFin':'Samedi à  13h00h','lieu':'Thies' },
  {'id':5,'img':'img/Suite.png','libelle':'Formation auto-ecole gratuite ','description':'Auto Ecole ','dateDebut':'Samedi à 9h00','dateFin':'Samedi à  13h00h','lieu':'Mbour' },
  {'id':6,'img':'img/Suite.png','libelle':'Imitation de Sexy Dance 3! ','description':'Just Dance','dateDebut':'Samedi à 9h00','dateFin':'Samedi à  13h00h','lieu':'Pikine'},
];
app
   .controller('evenementList',function ($scope) {
     $scope.evenements = evenements;
})
  .controller('evenementView',function($scope,$ionicLoading,$compile){
    $scope.evenement = evenements[0];
    // chargement de levenement en parametre
    // google map

    function initialize() {
      var myLatlng = new google.maps.LatLng(14.681620599999999,-17.4674687);

      var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

      //Marker + infowindow + angularjs compiled ng-click
      var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
      var compiled = $compile(contentString)($scope);

      var infowindow = new google.maps.InfoWindow({
        content: compiled[0]
      });

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Uluru (Ayers Rock)'
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

      $scope.map = map;
    }
    google.maps.event.addDomListener(window, 'load', initialize);


  })



.controller('mesevenements',function ($scope,$rootScope,$ionicModal,$cordovaGeolocation,evenementProvider) {
  $scope.evenements = evenements;
  //creation du modal pour  creer uen nouvelle compétence
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.addevenement = function (evenement) {
    console.log(evenement);
    //recuperation du lieu
    var localisation;
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
        localisation = lat+"/"+long;
        evenement.localisation =localisation;
        // ici on insert dans la base
        evenementProvider.addEvenement(evenement,$rootScope.user.id);

      }, function(err) {
        // error
      });




  }


})

;
