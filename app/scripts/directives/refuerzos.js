'use strict';

angular.module('validacionesApp')
  .directive('refuerzos', function (listen, $parse, $q, $timeout) {
    var MAX_DELINCUENTES = 10;
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function link(scope, element, attrs, ngModelCtrl) {
        ngModelCtrl.$asyncValidators.noHayDelincuentes = function (modelValue, viewValue){
          var value = parseInt(modelValue || viewValue, 10);
          var defer = $q.defer();
          $timeout(function (){
              if (value <= MAX_DELINCUENTES){
                defer.resolve();
              } else {
                defer.reject();
              }
          },1000);
          return defer.promise;
        };

      }
    };
  });
