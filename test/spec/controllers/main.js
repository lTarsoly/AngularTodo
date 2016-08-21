'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoappApp'));

  var MainCtrl,
    scope,
    mockdataaccessservice;

  var getTodosCalled = false;
  var expectedTodos = [{}, {}];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    mockdataaccessservice = {
      getTodos: function(){
        getTodosCalled = true;
        var response = {data: expectedTodos};
        var mockPromise = {
          then: function(callback) {
            callback(response);
          }
        };

        return mockPromise;
      }
    };

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      dataAccessService : mockdataaccessservice
    });
  }));

  it('should attach a list of todos to the scope', function () {
    expect(scope.todos).toBe(expectedTodos);
  });

  it('should get todos from service', function () {
    expect(getTodosCalled).toBe(true);
  });
});
