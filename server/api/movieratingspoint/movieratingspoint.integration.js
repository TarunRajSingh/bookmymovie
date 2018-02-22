'use strict';

var app = require('../..');
import request from 'supertest';

var newMovieratingspoint;

describe('Movieratingspoint API:', function() {

  describe('GET /api/movieratingspoints', function() {
    var movieratingspoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/movieratingspoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          movieratingspoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(movieratingspoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/movieratingspoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/movieratingspoints')
        .send({
          name: 'New Movieratingspoint',
          info: 'This is the brand new movieratingspoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMovieratingspoint = res.body;
          done();
        });
    });

    it('should respond with the newly created movieratingspoint', function() {
      expect(newMovieratingspoint.name).to.equal('New Movieratingspoint');
      expect(newMovieratingspoint.info).to.equal('This is the brand new movieratingspoint!!!');
    });

  });

  describe('GET /api/movieratingspoints/:id', function() {
    var movieratingspoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/movieratingspoints/' + newMovieratingspoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          movieratingspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      movieratingspoint = {};
    });

    it('should respond with the requested movieratingspoint', function() {
      expect(movieratingspoint.name).to.equal('New Movieratingspoint');
      expect(movieratingspoint.info).to.equal('This is the brand new movieratingspoint!!!');
    });

  });

  describe('PUT /api/movieratingspoints/:id', function() {
    var updatedMovieratingspoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/movieratingspoints/' + newMovieratingspoint._id)
        .send({
          name: 'Updated Movieratingspoint',
          info: 'This is the updated movieratingspoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMovieratingspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMovieratingspoint = {};
    });

    it('should respond with the updated movieratingspoint', function() {
      expect(updatedMovieratingspoint.name).to.equal('Updated Movieratingspoint');
      expect(updatedMovieratingspoint.info).to.equal('This is the updated movieratingspoint!!!');
    });

  });

  describe('DELETE /api/movieratingspoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/movieratingspoints/' + newMovieratingspoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when movieratingspoint does not exist', function(done) {
      request(app)
        .delete('/api/movieratingspoints/' + newMovieratingspoint._id)
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
