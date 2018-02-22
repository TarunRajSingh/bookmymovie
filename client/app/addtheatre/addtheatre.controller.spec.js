'use strict';

describe('Component: AddtheatreComponent', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var AddtheatreComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AddtheatreComponent = $componentController('addtheatre', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
