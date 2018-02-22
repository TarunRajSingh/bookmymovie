'use strict';

describe('Component: SeatbookingComponent', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var SeatbookingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SeatbookingComponent = $componentController('seatbooking', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
