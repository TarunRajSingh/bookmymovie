'use strict';

var app = require('../..');
import request from 'supertest';

var newPaymentspoint;

describe('Paymentspoint API:', function() {

  describe('GET /api/paymentspoints', function() {
    var paymentspoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/paymentspoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          paymentspoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(paymentspoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/paymentspoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/paymentspoints')
        .send({
          name: 'New Paymentspoint',
          info: 'This is the brand new paymentspoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPaymentspoint = res.body;
          done();
        });
    });

    it('should respond with the newly created paymentspoint', function() {
      expect(newPaymentspoint.name).to.equal('New Paymentspoint');
      expect(newPaymentspoint.info).to.equal('This is the brand new paymentspoint!!!');
    });

  });

  describe('GET /api/paymentspoints/:id', function() {
    var paymentspoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/paymentspoints/' + newPaymentspoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          paymentspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      paymentspoint = {};
    });

    it('should respond with the requested paymentspoint', function() {
      expect(paymentspoint.name).to.equal('New Paymentspoint');
      expect(paymentspoint.info).to.equal('This is the brand new paymentspoint!!!');
    });

  });

  describe('PUT /api/paymentspoints/:id', function() {
    var updatedPaymentspoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/paymentspoints/' + newPaymentspoint._id)
        .send({
          name: 'Updated Paymentspoint',
          info: 'This is the updated paymentspoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPaymentspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPaymentspoint = {};
    });

    it('should respond with the updated paymentspoint', function() {
      expect(updatedPaymentspoint.name).to.equal('Updated Paymentspoint');
      expect(updatedPaymentspoint.info).to.equal('This is the updated paymentspoint!!!');
    });

  });

  describe('DELETE /api/paymentspoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/paymentspoints/' + newPaymentspoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when paymentspoint does not exist', function(done) {
      request(app)
        .delete('/api/paymentspoints/' + newPaymentspoint._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
