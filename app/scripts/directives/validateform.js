'use strict';

angular.module('validacionesApp')
  .directive('validateForm', function () {
    return {
      restrict: 'A',
      scope: {
        'validateForm':'=',
        'onValid': '&',
        'onInvalid': '&'
      },
      link: function link(scope, element) {
        function checkForm(){
          scope.$apply(function (){
            if (scope.validateForm.$valid) {
              scope.onValid();
              return;
            }
            var errors = {};
            for(var key in scope.validateForm){
              if (key.indexOf('$') !== 0) {
                if (scope.validateForm[key] && scope.validateForm[key].$invalid) {
                  errors[key] = scope.validateForm[key];
                }
              }
            }
            scope.onInvalid({currentErrors:errors});
          });
        }
        angular.element(element).on('click',checkForm);
        scope.$on('destroy', function (){
          angular.element(element).off('click', checkForm);
        });
      }
    };
  });
