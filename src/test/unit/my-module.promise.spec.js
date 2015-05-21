describe('promise', function() {
  var scope;
  var fakeMyModuleService;
  var controller;
  var q;
  
  beforeEach(angular.mock.module('app'));
  
  beforeEach(function() {
    fakeMyModuleService = {
      obterPorId: function() {}
    }
    
    sinon.stub(fakeMyModuleService, 'obterPorId', function() {
      var deferred = q.defer();
      deferred.resolve({ data: { Id: 299 } });
      return deferred.promise;
    });
  });
  
  beforeEach(inject(function ($rootScope, $controller, $q) {
    q = $q;
    
    controller = $controller('Promise', {
      myModuleService: fakeMyModuleService
    });
    
    $rootScope.$apply();
  }));

  it('deve exibir informações da reclamação 299', function () {
    controller.reclamacao.Id.should.equal(299);
  });

});