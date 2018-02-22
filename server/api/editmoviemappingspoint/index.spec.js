'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var editmoviemappingspointCtrlStub = {
  index: 'editmoviemappingspointCtrl.index',
  show: 'editmoviemappingspointCtrl.show',
  create: 'editmoviemappingspointCtrl.create',
  update: 'editmoviemappingspointCtrl.update',
  destroy: 'editmoviemappingspointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var editmoviemappingspointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './editmoviemappingspoint.controller': editmoviemappingspointCtrlStub
});

describe('Editmoviemappingspoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(editmoviemappingspointIndex).to.equal(routerStub);
  });

  describe('GET /api/editmoviemappingspoints', function() {

    it('should route to editmoviemappingspoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'editmoviemappingspointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/editmoviemappingspoints/:id', function() {

    it('should route to editmoviemappingspoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'editmoviemappingspointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/editmoviemappingspoints', function() {

    it('should route to editmoviemappingspoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'editmoviemappingspointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/editmoviemappingspoints/:id', function() {

    it('should route to editmoviemappingspoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'editmoviemappingspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/editmoviemappingspoints/:id', function() {

    it('should route to editmoviemappingspoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'editmoviemappingspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/editmoviemappingspoints/:id', function() {

    it('should route to editmoviemappingspoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'editmoviemappingspointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
