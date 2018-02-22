'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var paymentspointCtrlStub = {
  index: 'paymentspointCtrl.index',
  show: 'paymentspointCtrl.show',
  create: 'paymentspointCtrl.create',
  update: 'paymentspointCtrl.update',
  destroy: 'paymentspointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var paymentspointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './paymentspoint.controller': paymentspointCtrlStub
});

describe('Paymentspoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(paymentspointIndex).to.equal(routerStub);
  });

  describe('GET /api/paymentspoints', function() {

    it('should route to paymentspoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'paymentspointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/paymentspoints/:id', function() {

    it('should route to paymentspoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'paymentspointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/paymentspoints', function() {

    it('should route to paymentspoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'paymentspointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/paymentspoints/:id', function() {

    it('should route to paymentspoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'paymentspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/paymentspoints/:id', function() {

    it('should route to paymentspoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'paymentspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/paymentspoints/:id', function() {

    it('should route to paymentspoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'paymentspointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
