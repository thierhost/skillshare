'use strict';

app
  .factory('userProvider',function ($http, $rootScope, $location) {


    function  connexion  (user) {
          // preparation de la requette
          var url ="http://vps286955.ovh.net/tetema/model/utilisateur/?";
          var params = "username="+user.login+"&password="+user.password ;
          url+=params;
          var req ={
            method: 'GET',
            url: url,
            cache :false,
            headers: {
              'Accept':'Application/json',
              'Cache-Controle':'no-cache',
            }
          };
          $http(req)
            .success(function(response) {
              if(response.length!=0)
              {
                $rootScope.user = response[0];
                $location.path('/menu/contenus');
              }else{
                console.log(" Login ou mot de passe incorrect");
              }

                })
            .error(function (reponse) {
              console.log(" Login ou mot de passe incorrect");
      })
    }

    function inscription(user){
    //preparation de la requette
      var url ="http://vps286955.ovh.net/tetema/model/utilisateur/";
      var req ={
        method: 'POST',
        url: url,
        cache :false,
        headers: {
          'Accept':'Application/json',
          'Cache-Controle':'no-cache'
        },
        data: {username: user.login,password:user.password,nom:user.nom,prenom:user.prenom,telephone:user.telephone}
      };

      $http(req)
        .success(function (response) {
          if(response.id)
          {
            console.log("compte crée avec succes");
            $location.path('/');
          }else {
            //
          }
        })
        .error(function (response) {
          console.log("erreur dans la creation du compte");
        })


    }

    ///
    function motdepasseoublie() {

    }


    return{
      connexion : connexion,
      inscription : inscription,
      motdepasseoublie: motdepasseoublie
    }

});
