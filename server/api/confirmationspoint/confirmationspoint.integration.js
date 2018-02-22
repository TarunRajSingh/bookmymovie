'use strict';

var app = require('../..');
import request from 'supertest';

var newConfirmationspoint;

describe('Confirmationspoint API:', function() {

  describe('GET /api/confirmationspoints', function() {
    var confirmationspoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/confirmationspoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          confirmationspoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(confirmationspoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/confirmationspoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/confirmationspoints')
        .send({
          name: 'New Confirmationspoint',
          info: 'This is the brand new confirmationspoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newConfirmationspoint = res.body;
          done();
        });
    });

    it('should respond with the newly created confirmationspoint', function() {
      expect(newConfirmationspoint.name).to.equal('New Confirmationspoint');
      expect(newConfirmationspoint.info).to.equal('This is the brand new confirmationspoint!!!');
    });

  });

  describe('GET /api/confirmationspoints/:id', function() {
    var confirmationspoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/confirmationspoints/' + newConfirmationspoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          confirmationspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      confirmationspoint = {};
    });

    it('should respond with the requested confirmationspoint', function() {
      expect(confirmationspoint.name).to.equal('New Confirmationspoint');
      expect(confirmationspoint.info).to.equal('This is the brand new confirmationspoint!!!');
    });

  });

  describe('PUT /api/confirmationspoints/:id', function() {
    var updatedConfirmationspoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/confirmationspoints/' + newConfirmationspoint._id)
        .send({
          name: 'Updated Confirmationspoint',
          info: 'This is the updated confirmationspoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedConfirmationspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedConfirmationspoint = {};
    });

    it('should respond with the updated confirmationspoint', function() {
      expect(updatedConfirmationspoint.name).to.equal('Updated Confirmationspoint');
      expect(updatedConfirmationspoint.info).to.equal('This is the updated confirmationspoint!!!');
    });

  });

  describe('DELETE /api/confirmationspoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/confirmationspoints/' + newConfirmationspoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when confirmationspoint does not exist', function(done) {
      request(app)
        .delete('/api/confirmationspoints/' + newConfirmationspoint._id)
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
