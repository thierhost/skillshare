'use strict';

// cette variable sert à mettre la gestion du cache à vrai ou faux
// le cache doit etre activer en mode production et false en mode dev
var cacheActive = false;

app
  .config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('homepage',{
			// cette state correspond   à l'url de la page d'acceuil qui va correspondre à l'etat de connexion
			cahe : cacheActive,
			url :'/',
			templateUrl:'js/views/homepage/index.html',
			controller: 'homepageIndex'
		})
    .state('homepageInscription',{
      // cette state correspond   à l'url de la page d'inscription qui va correspondre à l'etat de creation
      //d'un nouveau compte
      cahe : cacheActive,
      url :'/inscription',
      templateUrl:'js/views/homepage/inscription.html',
      controller: 'homepageInscription'
    })

    .state('menu',{
      // cette url correspond au menu de notre application
      // cette url est comme une interface elle ne peut etre instanciée
      // les sous menu ne feront que la herite et l'url des sous menu sera la forme menu.<< >>
      cahe : cacheActive,
      url :'/menu',
      abstract:true,
      templateUrl:'js/views/homepage/menu.html'
    })
    .state('menu.deconnexion',{
      // url de deconnexion d'un utilisateur
      cahe : cacheActive,
      url :'/deconnexion',
      views: {
        'menuContent': {
          controller: 'deconnexion'
        }
      }

    })

    //*************************** Contenu **********************************************//
    .state('menu.ContenuList',{
      // cette url va permettre de lister l'ensemble des contenus avec une possibilité de recherche
      // extends menu
      cahe : cacheActive,
      url :'/contenus',
      views:{
        'menuContent': {
          templateUrl:'js/views/contenu/contenuList.html',
          controller: 'ContenuList'
        }
      }
    })
    .state('menu.ContenuView',{
      // cette state correspond   au contenu d'un seul élément
      // extends menu
      cahe : cacheActive,
      url :'/contenus/:id',
      views: {
        'menuContent': {
          templateUrl:'js/views/contenu/view.html',
          controller: 'ContenuView'
        }
    }
    })
    .state('menu.mescontenus',{
      // cette state correspond   au contenu d'un seul élément
      // extends menu
      cahe : cacheActive,
      url :'/mescontenus',
      views: {
        'menuContent': {
          templateUrl:'js/views/contenu/mescontenus.html',
          controller: 'mescontenus'
        }
      }
    })
  // ********************************* evenement ***************************************//
    .state('menu.evenementList',{
      // cette state correspond   à l'url qui va permettre de lister lensemble des evenements
      // extends menu
      cahe : cacheActive,
      url :'/evenements',
      views: {
        'menuContent': {
          templateUrl:'js/views/evenement/evenementList.html',
          controller: 'evenementList'
        }
      }
    })
    .state('menu.evenementView',{
      // cette state correspond   à l'url qui va permettre de lister les informations sur un evenement
      // extends menu
      cahe : cacheActive,
      url :'/evenements/:id',
      views: {
        'menuContent': {
          templateUrl:'js/views/evenement/view.html',
          controller: 'evenementView'
        }
      }
    })
    .state('menu.mesevenements',{
      // cette state correspond   à l'url qui va permettre de lister mes propres evenements ainsi que les manager
      // extends menu
      cahe : cacheActive,
      url :'/mesevenements',
      views: {
        'menuContent': {
          templateUrl:'js/views/evenement/mesevenements.html',
          controller: 'mesevenements'
        }
      }
    })
        /*********************Compétences *******************************/
    .state('menu.mescompetences',{
      // cette state correspond   à l'url qui va permettre de lister mes propres compétences ainsi que les manager
      // extends menu
      cahe : cacheActive,
      url :'/mescompetences',
      views: {
        'menuContent': {
          templateUrl:'js/views/competence/mescompetences.html',
          controller: 'mescompetences'
        }
      }
    })
    $urlRouterProvider.otherwise('/contenus');

  });
