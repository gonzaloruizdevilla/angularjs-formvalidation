'use strict';

angular.module('validacionesApp')
  .directive('validateForm', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      scope: {
        'validateForm':'=',
        'onValid': '&',
        'onInvalid': '&'
      },
      link: function link(scope, element) {
        function checkForm(){
          var errors = {}, hayErrores = false;
          for(var key in scope.validateForm){
            if (key.indexOf('$') !== 0) {
              if (scope.validateForm[key].$invalid) {
                hayErrores = true;
                errors[key] = scope.validateForm[key];
              }
            }
          }
          console.log(errors);
          if (hayErrores){
            scope.onInvalid({currentErrors: errors});
          } else {
            scope.onValid();
          }

        }
        angular.element(element).on('click',checkForm);
        scope.$on('destroy', function (){
          angular.element(element).off('click', checkForm);
        });
      }
    };
  });
