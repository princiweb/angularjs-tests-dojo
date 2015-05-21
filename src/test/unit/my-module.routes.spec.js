describe('Rotas do meu módulo', function() {
  var route, location, rootScope, httpBackend;

  beforeEach(function() {
    
    angular.mock.module('app');
    
    inject(function($httpBackend, $route, $location, $rootScope) {
      httpBackend = $httpBackend;
      route = $route;
      location = $location;
      rootScope = $rootScope;
    });

    httpBackend.expectGET('app/my-module/index.html').respond(200);
    
  });

  it('deve mapear a rota da inicial com a view da inicial', function () {
    route.routes['/'].templateUrl.should.equal('app/my-module/index.html');
  });

  it('deve rotear para a view da inicial', function () {
      location.path('/');
      rootScope.$apply();
      route.current.templateUrl.should.equal('app/my-module/index.html');
  });

});