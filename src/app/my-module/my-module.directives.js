(function () {
  'use strict';

  angular
    .module('app.my-module')
    .directive('myDirective', myDirective)
    .directive('menuSecreto', menuSecreto);

  function myDirective() {
		
		var directive = {
			restrict: 'E',
			replace: true,
			template: '<p>Desenvolvido por Fulano.</p>'
		};
		
		return directive;
  }
	
	function menuSecreto() {
		
		var directive = {
			restrict: 'E',
			replace: true,
			template: '<div><a href="">Menu secreto</a><ul style="display: none"></ul></div>'
		};		
		
		return directive;
		
	};

}());