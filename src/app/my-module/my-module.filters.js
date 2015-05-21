(function () {
  'use strict';

  angular
    .module('app.my-module')
    .filter('nomeCompleto', nomeCompleto);

  function nomeCompleto() {
    return function(lista) {
      var resultados = [];
      
      if (!lista.length)
        return [ 'Não há nomes.' ];
      
      lista.forEach(function(item) {
        if (item.split(' ').length > 1)
          resultados.push(item);
      });
      
      return resultados;
    };
  }

}());