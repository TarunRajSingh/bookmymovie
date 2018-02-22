'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var addtheatrespointCtrlStub = {
  index: 'addtheatrespointCtrl.index',
  show: 'addtheatrespointCtrl.show',
  create: 'addtheatrespointCtrl.create',
  update: 'addtheatrespointCtrl.update',
  destroy: 'addtheatrespointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var addtheatrespointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './addtheatrespoint.controller': addtheatrespointCtrlStub
});

describe('Addtheatrespoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(addtheatrespointIndex).to.equal(routerStub);
  });

  describe('GET /api/addtheatrespoints', function() {

    it('should route to addtheatrespoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'addtheatrespointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/addtheatrespoints/:id', function() {

    it('should route to addtheatrespoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'addtheatrespointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/addtheatrespoints', function() {

    it('should route to addtheatrespoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'addtheatrespointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/addtheatrespoints/:id', function() {

    it('should route to addtheatrespoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'addtheatrespointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/addtheatrespoints/:id', function() {

    it('should route to addtheatrespoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'addtheatrespointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/addtheatrespoints/:id', function() {

    it('should route to addtheatrespoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'addtheatrespointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
