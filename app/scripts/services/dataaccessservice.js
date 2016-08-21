'use strict';

/**
 * @ngdoc service
 * @name todoappApp.dataAccessService
 * @description
 * # dataAccessService
 * Service in the todoappApp.
 */
angular.module('todoappApp')
  .service('dataAccessService', ['$http', function ($http) {
    this.getTodos = function (){
      return $http({
                  method: 'GET',
                  url: 'http://localhost:52829/api/todo'
              });
    };
    
    this.addTodo = function (todo) {
              return $http({
                  method: 'POST',
                  url: 'http://localhost:52829/api/todo',
                  data: todo
              });
    };
  }]);
