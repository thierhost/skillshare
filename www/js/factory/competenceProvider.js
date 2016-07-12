'use strict';

app.factory('competenceProvider',function($http,$location,$rootScope){

    function addCompetence(competence,user_id){
      var url ="http://vps286955.ovh.net:80/tetema/model/competence/";
      var req ={
        method: 'POST',
        url: url,
        cache :false,
        headers: {
          'Accept':'Application/json',
          'Cache-Controle':'no-cache'
        },
        data: {libelle:competence.libelle,description:competence.description,categorie:competence.category_id}
      };

      $http(req)
        .success(function (response) {
          if(response.id)
          {
            // on a crééer la comptence il faut a la linker au user :
            var id_competence = response.id;
            //console.log(id_competence);
            //console.log(user_id);
            addCompetenceUser(id_competence,user_id,function (result) {
              if(result==1){
                console.log("competence ajouté avec sucees");
              }else
              {
                console.log("competence non ajoutéé");
              }
            })


          }else {
            //
          }
        })
        .error(function (response) {
          console.log("erreur dans la creation du compte");
        })
    }

    function addCompetenceUser(idcompetence,id_user,callbak){
      var url ="http://vps286955.ovh.net:80/tetema/model/competence_souscription/";
      var req ={
        method: 'POST',
        url: url,
        cache :false,
        headers: {
          'Accept':'Application/json',
          'Cache-Controle':'no-cache'
        },
        data: {competence:idcompetence,utilisateur:id_user}
      };

      $http(req)
        .success(function(response){
          //console.log(response);
          callbak(1);
        })
        .error(function (response) {
          callbak(-1);
        })
    }

  function mescompetence(id_user,callbak){
    var url = "http://vps286955.ovh.net:80/tetema/model/competence/?id=";
    url+=id_user;
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
        callbak(response);
      })
      .error(function (response) {
        console.log(response);
      })


  }

  return{
    addCompetence:addCompetence,
    mescompetence:mescompetence
  }
})
