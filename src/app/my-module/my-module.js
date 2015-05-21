(function () {
  'use strict';
  
  angular
    .module('app.my-module')
    .controller('Index', Index)
    .controller('Filter', Filter)
    .controller('Promise', Promise)
    .controller('Directive', Directive)
    .controller('Form', Form);

  function Index() {
    var vm = this;
  }
  
  function Filter() {
      var vm = this;
    
      vm.nomes = [
      'Zé',
      'Victor Miguez',
      'Jô',
      'Gabriel Ribeiro'
    ]
  }
  
  function Promise(myModuleService) {
    var vm = this;
    
    myModuleService.obterPorId(299).then(function(response) {
      vm.reclamacao = response.data;
    });
  }
  
  function Directive() {
    var vm = this;
  }
  
  function Form() {
    var vm = this;
    
    vm.enviar = function(ehValido) {
      
      if (ehValido) {
        vm.sucesso = 'Boa champz!';
      }
      
    }
  }

}());
