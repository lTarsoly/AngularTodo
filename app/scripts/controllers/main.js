'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoappApp
 */
angular.module('todoappApp')
  .controller('MainCtrl', ['$scope', 'dataAccessService', function ($scope, dataAccessService) {
    
    var initTodo = function (){
      $scope.todo={
      Due:null,
      What:""
      };
    };

    initTodo();

    dataAccessService.getTodos().then(function (response) {
          $scope.todos = response.data;
      });

      $scope.addTodo = function(){
        dataAccessService.addTodo($scope.todo).then(function (){
          $scope.todos.push($scope.todo);
          initTodo();
        });
      }
  }]);
