'use strict';

app.factory('categoryProvider',function ($http) {

    // fonction qui recupere l'ensemble des category
  function getAll(callbak){
    var url = "http://vps286955.ovh.net:80/tetema/model/categorie/";
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


    return {
      getAll : getAll
    }
});
