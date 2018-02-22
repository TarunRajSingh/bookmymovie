'use strict';

describe('Component: MovieratingComponent', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var MovieratingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MovieratingComponent = $componentController('movierating', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
