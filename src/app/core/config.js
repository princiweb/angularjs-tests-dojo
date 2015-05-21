(function () {
  'use strict';

  var core = angular.module('app.core');

  core.config(configure);

  function configure($routeProvider, $locationProvider, $httpProvider, routehelperConfigProvider) {
    // Configure the common route provider
    routehelperConfigProvider.config.$routeProvider = $routeProvider;
    routehelperConfigProvider.config.docTitle = 'Meu App - ';
  }
}());