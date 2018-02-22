'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var movieratingspointCtrlStub = {
  index: 'movieratingspointCtrl.index',
  show: 'movieratingspointCtrl.show',
  create: 'movieratingspointCtrl.create',
  update: 'movieratingspointCtrl.update',
  destroy: 'movieratingspointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var movieratingspointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './movieratingspoint.controller': movieratingspointCtrlStub
});

describe('Movieratingspoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(movieratingspointIndex).to.equal(routerStub);
  });

  describe('GET /api/movieratingspoints', function() {

    it('should route to movieratingspoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'movieratingspointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/movieratingspoints/:id', function() {

    it('should route to movieratingspoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'movieratingspointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/movieratingspoints', function() {

    it('should route to movieratingspoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'movieratingspointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/movieratingspoints/:id', function() {

    it('should route to movieratingspoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'movieratingspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/movieratingspoints/:id', function() {

    it('should route to movieratingspoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'movieratingspointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/movieratingspoints/:id', function() {

    it('should route to movieratingspoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'movieratingspointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
