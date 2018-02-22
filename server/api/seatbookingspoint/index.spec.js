'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var seatbookingspointCtrlStub = {
  index: 'seatbookingspointCtrl.index',
  show: 'seatbookingspointCtrl.show',
  create: 'seatbookingspointCtrl.create',
  update: 'seatbookingspointCtrl.update',
  destroy: 'seatbookingspointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var seatbookingspointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './seatbookingspoint.controller': seatbookingspointCtrlStub
});

describe('Seatbookingspoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(seatbookingspointIndex).to.equal(routerStub);
  });

  describe('GET /api/seatbookingspoints', function() {

    it('should route to seatbookingspoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'seatbookingspointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/seatbookingspoints/:id', function() {

    it('should route to seatbookingspoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'seatbookingspointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/seatbookingspoints', function() {

    it('should route to seatbookingspoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'seatbookingspointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/seatbookingspoints/:id', function() {

    it('should route to seatbookingspoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'seatbookingspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/seatbookingspoints/:id', function() {

    it('should route to seatbookingspoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'seatbookingspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/seatbookingspoints/:id', function() {

    it('should route to seatbookingspoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'seatbookingspointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
