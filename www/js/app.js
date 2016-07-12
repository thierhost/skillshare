'use strict';

var app = angular.module('suite_mobile', ['ionic','ngCordova','ngSanitize']).run(function($ionicPlatform,$location) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    // on va permettre à l'application de se cabler sur la page d'accueil qui correspondra à  la page de connexion
    $location.path('/');
  });
});

app.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');
});
