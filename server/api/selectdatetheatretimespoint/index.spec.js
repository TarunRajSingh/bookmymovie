'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var selectdatetheatretimespointCtrlStub = {
  index: 'selectdatetheatretimespointCtrl.index',
  show: 'selectdatetheatretimespointCtrl.show',
  create: 'selectdatetheatretimespointCtrl.create',
  update: 'selectdatetheatretimespointCtrl.update',
  destroy: 'selectdatetheatretimespointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var selectdatetheatretimespointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './selectdatetheatretimespoint.controller': selectdatetheatretimespointCtrlStub
});

describe('Selectdatetheatretimespoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(selectdatetheatretimespointIndex).to.equal(routerStub);
  });

  describe('GET /api/selectdatetheatretimespoints', function() {

    it('should route to selectdatetheatretimespoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'selectdatetheatretimespointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/selectdatetheatretimespoints/:id', function() {

    it('should route to selectdatetheatretimespoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'selectdatetheatretimespointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/selectdatetheatretimespoints', function() {

    it('should route to selectdatetheatretimespoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'selectdatetheatretimespointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/selectdatetheatretimespoints/:id', function() {

    it('should route to selectdatetheatretimespoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'selectdatetheatretimespointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/selectdatetheatretimespoints/:id', function() {

    it('should route to selectdatetheatretimespoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'selectdatetheatretimespointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/selectdatetheatretimespoints/:id', function() {

    it('should route to selectdatetheatretimespoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'selectdatetheatretimespointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
