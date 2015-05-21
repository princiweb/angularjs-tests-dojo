describe('Soma', function() {

  it('deve retornar 5 ao somar os números 2 e 3', function() {
    
    var numero1 = 2;
    var numero2 = 3;

    var resultadoSoma = numero1 + numero2;

    resultadoSoma.should.equal(5);
      
  });

});