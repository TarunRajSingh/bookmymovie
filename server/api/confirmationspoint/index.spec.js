'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var confirmationspointCtrlStub = {
  index: 'confirmationspointCtrl.index',
  show: 'confirmationspointCtrl.show',
  create: 'confirmationspointCtrl.create',
  update: 'confirmationspointCtrl.update',
  destroy: 'confirmationspointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var confirmationspointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './confirmationspoint.controller': confirmationspointCtrlStub
});

describe('Confirmationspoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(confirmationspointIndex).to.equal(routerStub);
  });

  describe('GET /api/confirmationspoints', function() {

    it('should route to confirmationspoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'confirmationspointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/confirmationspoints/:id', function() {

    it('should route to confirmationspoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'confirmationspointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/confirmationspoints', function() {

    it('should route to confirmationspoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'confirmationspointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/confirmationspoints/:id', function() {

    it('should route to confirmationspoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'confirmationspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/confirmationspoints/:id', function() {

    it('should route to confirmationspoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'confirmationspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/confirmationspoints/:id', function() {

    it('should route to confirmationspoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'confirmationspointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
