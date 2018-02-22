'use strict';

var app = require('../..');
import request from 'supertest';

var newMoviespoint;

describe('Moviespoint API:', function() {

  describe('GET /api/moviespoints', function() {
    var moviespoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/moviespoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          moviespoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(moviespoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/moviespoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/moviespoints')
        .send({
          name: 'New Moviespoint',
          info: 'This is the brand new moviespoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMoviespoint = res.body;
          done();
        });
    });

    it('should respond with the newly created moviespoint', function() {
      expect(newMoviespoint.name).to.equal('New Moviespoint');
      expect(newMoviespoint.info).to.equal('This is the brand new moviespoint!!!');
    });

  });

  describe('GET /api/moviespoints/:id', function() {
    var moviespoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/moviespoints/' + newMoviespoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          moviespoint = res.body;
          done();
        });
    });

    afterEach(function() {
      moviespoint = {};
    });

    it('should respond with the requested moviespoint', function() {
      expect(moviespoint.name).to.equal('New Moviespoint');
      expect(moviespoint.info).to.equal('This is the brand new moviespoint!!!');
    });

  });

  describe('PUT /api/moviespoints/:id', function() {
    var updatedMoviespoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/moviespoints/' + newMoviespoint._id)
        .send({
          name: 'Updated Moviespoint',
          info: 'This is the updated moviespoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMoviespoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMoviespoint = {};
    });

    it('should respond with the updated moviespoint', function() {
      expect(updatedMoviespoint.name).to.equal('Updated Moviespoint');
      expect(updatedMoviespoint.info).to.equal('This is the updated moviespoint!!!');
    });

  });

  describe('DELETE /api/moviespoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/moviespoints/' + newMoviespoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when moviespoint does not exist', function(done) {
      request(app)
        .delete('/api/moviespoints/' + newMoviespoint._id)
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
