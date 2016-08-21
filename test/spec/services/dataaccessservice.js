'use strict';

describe('Service: dataAccessService', function () {

  // load the service's module
  beforeEach(module('todoappApp'));

  // instantiate service
  var dataAccessService;
  beforeEach(inject(function (_dataAccessService_) {
    dataAccessService = _dataAccessService_;
  }));

  it('should do something', function () {
    expect(!!dataAccessService).toBe(true);
  });

});
