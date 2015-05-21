// describe('Página inicial', function() {
//   it('deve achar o menu', function() {
//     browser.get('index.html');
    
//     var el = element(by.id('menu'));
    
//     expect(el.isPresent()).toBe(true);
//   });
// });

// describe('Navegação', function(done) {
//   it('deve entrar na página de Filtros', function() {
//     browser.get('index.html');
    
//     var elMenu = element.all(by.id('menu a')).get(1);
    
//     elMenu.click();
    
//     expect(browser.getCurrentUrl()).toBe('http://localhost:3000/src/#/filter.html');
    
//   });
// });

// describe('Form', function(done) {
//   it('formulário preenchido corretamente deve ser enviado', function() {
//     browser.get('#/form.html');
    
//     var elNome = element(by.id('nome'));
//     var elEmail = element(by.id('email'));
//     var elSubmit = element(by.id('enviar'));
//     var elMensagemSucesso = element(by.id('mensagem-sucesso'));
    
//     elNome.sendKeys('Rodolfo Lopes Pereira');
//     elEmail.sendKeys('rod.lps@hotmail.com');
    
//     elSubmit.click();
    
//     expect(elMensagemSucesso.getText()).toBe('Boa champz!');
    
//   });
  
//   it('formulário sem e-mail não deve ser enviado', function() {
//     browser.get('#/form.html');
    
//     var elNome = element(by.id('nome'));
//     var elEmail = element(by.id('email'));
//     var elSubmit = element(by.id('enviar'));
//     var elMensagemSucesso = element(by.id('mensagem-sucesso'));
    
//     elNome.sendKeys('Rodolfo Lopes Pereira');
    
//     elSubmit.click();
    
//     expect(element(by.css('.email-required')).isDisplayed()).toBe(true);
    
//   });
// });

describe('Form', function(done) {
  it('teste', function() {

    for (var i = 0; i <= 30; i++) {
      browser.ignoreSynchronization = true;
      browser.get('/contato.html');
      
      var elNome = element(by.id('txtNome'));
      var elEmail = element(by.id('txtEmail'));
      var elPlanejamento = element(by.id('txtPlanejamentoWeb'));
      var elMensagem = element(by.id('txtMensagem'));
      var elSubmit = element(by.id('btn-enviar'));
      
      elNome.sendKeys('Protractor');
      elEmail.sendKeys('teste@automatizado.com');    
      elPlanejamento.click();
      elMensagem.sendKeys('Protractor roxx!!!');

      elSubmit.click();
    };
    
  });
});