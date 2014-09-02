'use strict';

var menu = [
  'Introducción',
  'Form',
  'ng-form',
  'ng-form anidado',
  'ng-form anidado y aislado',
  'novalidate',
  'input',
  '$error',
  'type',
  'ngmessage',
  'ngModelOptions',
  'ngModelOptions 2',
  'validaciones propias',
  '$pending',
  'informes',
  'informes2'
];

angular.module('validacionesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMessages',
  'hljs',
  'isolateForm'
])
  .constant('menu', menu)
  .config(function ($routeProvider) {
    var i;
    $routeProvider
      .when('/ej0', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/ej0'
      });
    for(i = 1; i <= menu.length; i++) {
      $routeProvider.when('/ej'+i, {
        templateUrl: 'views/ej'+ i +'.html',
        controller: 'Ej' + i + 'Ctrl'
      });
    }

  });
