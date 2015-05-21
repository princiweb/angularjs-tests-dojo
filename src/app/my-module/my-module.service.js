(function () {
  'use strict';

  angular
    .module('app.my-module')
    .factory('myModuleService', myModuleService);

  function myModuleService($http) {
    var urlBase = 'http://www.cidadereclama.com.br/api/';

    var service = {
      obterPorId: obterPorId
    };
		
		return service;

    function obterPorId(id) {
      return $http.get(urlBase + 'reclamacoes.json/' + id);
    };
  }

}());