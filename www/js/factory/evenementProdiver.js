'use strict';

app.factory('evenementProvider',function($http){

      // fonction d'ajout d'un evenement

    function addEvenement(evenement,user_id){
      var url ="http://vps286955.ovh.net:80/tetema/model/evenement/";
      var req ={
        method: 'POST',
        url: url,
        cache :false,
        headers: {
          'Accept':'Application/json',
          'Cache-Controle':'no-cache'
        },
        data: {libelle:evenement.libelle,description:evenement.description,datedebut:evenement.datedebut,datefin:evenement.datefin,etat:'actif',localisation:evenement.localisation,competant:user_id}
      };

      $http(req)
        .success(function (response){
            console.log(response);
        })
        .error(function (response) {
          console.log(response);
        })

    }



  return{
    addEvenement:addEvenement
    }

});
