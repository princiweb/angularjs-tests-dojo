describe('my-module.filters', function() {
  var filter;
  
  beforeEach(function() {
    
    angular.mock.module('app');
    
    inject(function($filter) {
      filter = $filter;
    });
    
  });

  it('deve retornar dois resultados', function () {
    
    var nomeCompleto = filter('nomeCompleto');
    
    var nomes = [
      'Zé',
      'Victor Miguez',
      'Jô',
      'Gabriel Ribeiro'
    ];
    
    var resultados = nomeCompleto(nomes);
    
    resultados.should.have.length(2);
    
  });
  
  it('deve retornar mensagem de lista vazia quando não há itens na lista', function () {
    
    var nomeCompleto = filter('nomeCompleto');
    
    var nomes = [];
    
    var resultados = nomeCompleto(nomes);
    
    resultados[0].should.equal('Não há nomes.');
    
  });

});