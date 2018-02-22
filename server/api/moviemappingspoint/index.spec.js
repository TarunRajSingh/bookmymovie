'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var moviemappingspointCtrlStub = {
  index: 'moviemappingspointCtrl.index',
  show: 'moviemappingspointCtrl.show',
  create: 'moviemappingspointCtrl.create',
  update: 'moviemappingspointCtrl.update',
  destroy: 'moviemappingspointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var moviemappingspointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './moviemappingspoint.controller': moviemappingspointCtrlStub
});

describe('Moviemappingspoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(moviemappingspointIndex).to.equal(routerStub);
  });

  describe('GET /api/moviemappingspoints', function() {

    it('should route to moviemappingspoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'moviemappingspointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/moviemappingspoints/:id', function() {

    it('should route to moviemappingspoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'moviemappingspointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/moviemappingspoints', function() {

    it('should route to moviemappingspoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'moviemappingspointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/moviemappingspoints/:id', function() {

    it('should route to moviemappingspoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'moviemappingspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/moviemappingspoints/:id', function() {

    it('should route to moviemappingspoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'moviemappingspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/moviemappingspoints/:id', function() {

    it('should route to moviemappingspoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'moviemappingspointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
