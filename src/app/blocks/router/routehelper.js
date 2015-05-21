(function () {
  'use strict';

  angular
    .module('blocks.router')
    .provider('routehelperConfig', routehelperConfig)
    .factory('routehelper', routehelper);

  function routehelperConfig() {
    this.config = {
      // $routeProvider: undefined
      // docTitle: ''
    };

    this.$get = function () {
      return {
        config: this.config
      };
    };
  }

  function routehelper($rootScope, $location, routehelperConfig) {
    var $routeProvider = routehelperConfig.config.$routeProvider;

    var service = {
      configureRoutes: configureRoutes
    };

    init();

    return service;

    function configureRoutes(routes) {
      routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config);
      });

      $routeProvider.otherwise({redirectTo: '/'});
    }

    function init() {
      updateDocTitle();
    }
	
    function updateDocTitle() {
      $rootScope.$on('$routeChangeSuccess',
        function (event, current, previous) {
          var title = routehelperConfig.config.docTitle + ' ' + (current.title || '');

          $rootScope.title = title;
        }
      );
    }
  }
  
}());
