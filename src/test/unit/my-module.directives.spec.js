describe('my-module.directives', function() {
  var compile;
  var rootScope;
  
  beforeEach(function() {
    
    angular.mock.module('app');
    
    inject(function($compile, $rootScope) {
      compile = $compile;
      rootScope = $rootScope;
    });
    
  });

  it('deve conter a assinatura do Fulano', function () {
    
    var element = compile('<my-directive />')(rootScope);
    
    rootScope.$apply();
    
    element.html().should.contain('Desenvolvido por Fulano 2');
    
  });

});