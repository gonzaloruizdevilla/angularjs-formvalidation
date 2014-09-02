/*global angular*/
angular.module('validacionesApp').controller('Ej11Ctrl', function ($scope) {
	'use strict';
	var lista = 'Joffrey Lannister, ';
	$scope.lista = function (nuevaLista){
		return angular.isDefined(nuevaLista) ?
			(lista = nuevaLista.replace('el perro', '')) : 
			lista;
	};
});