'use strict';

angular.module('validacionesApp')
  .directive('dioses', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function link(scope, element, attrs, ngModelCtrl) {
        ngModelCtrl.$validators.dioses = function (modelValue, viewValue){
          var dioses = ['padre', 'guerrero', 'herrero', 'madre', 'doncella', 'vieja', 'desconocido'];
          var value = (modelValue || viewValue || "").toLowerCase();
          return dioses.indexOf(value) > -1;
        };

      }
    };
  });
