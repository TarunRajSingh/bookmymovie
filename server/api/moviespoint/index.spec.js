'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var moviespointCtrlStub = {
  index: 'moviespointCtrl.index',
  show: 'moviespointCtrl.show',
  create: 'moviespointCtrl.create',
  update: 'moviespointCtrl.update',
  destroy: 'moviespointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var moviespointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './moviespoint.controller': moviespointCtrlStub
});

describe('Moviespoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(moviespointIndex).to.equal(routerStub);
  });

  describe('GET /api/moviespoints', function() {

    it('should route to moviespoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'moviespointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/moviespoints/:id', function() {

    it('should route to moviespoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'moviespointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/moviespoints', function() {

    it('should route to moviespoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'moviespointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/moviespoints/:id', function() {

    it('should route to moviespoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'moviespointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/moviespoints/:id', function() {

    it('should route to moviespoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'moviespointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/moviespoints/:id', function() {

    it('should route to moviespoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'moviespointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
