'use strict';

var app = require('../..');
import request from 'supertest';

var newMoviemappingspoint;

describe('Moviemappingspoint API:', function() {

  describe('GET /api/moviemappingspoints', function() {
    var moviemappingspoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/moviemappingspoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          moviemappingspoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(moviemappingspoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/moviemappingspoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/moviemappingspoints')
        .send({
          name: 'New Moviemappingspoint',
          info: 'This is the brand new moviemappingspoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMoviemappingspoint = res.body;
          done();
        });
    });

    it('should respond with the newly created moviemappingspoint', function() {
      expect(newMoviemappingspoint.name).to.equal('New Moviemappingspoint');
      expect(newMoviemappingspoint.info).to.equal('This is the brand new moviemappingspoint!!!');
    });

  });

  describe('GET /api/moviemappingspoints/:id', function() {
    var moviemappingspoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/moviemappingspoints/' + newMoviemappingspoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          moviemappingspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      moviemappingspoint = {};
    });

    it('should respond with the requested moviemappingspoint', function() {
      expect(moviemappingspoint.name).to.equal('New Moviemappingspoint');
      expect(moviemappingspoint.info).to.equal('This is the brand new moviemappingspoint!!!');
    });

  });

  describe('PUT /api/moviemappingspoints/:id', function() {
    var updatedMoviemappingspoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/moviemappingspoints/' + newMoviemappingspoint._id)
        .send({
          name: 'Updated Moviemappingspoint',
          info: 'This is the updated moviemappingspoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMoviemappingspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMoviemappingspoint = {};
    });

    it('should respond with the updated moviemappingspoint', function() {
      expect(updatedMoviemappingspoint.name).to.equal('Updated Moviemappingspoint');
      expect(updatedMoviemappingspoint.info).to.equal('This is the updated moviemappingspoint!!!');
    });

  });

  describe('DELETE /api/moviemappingspoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/moviemappingspoints/' + newMoviemappingspoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when moviemappingspoint does not exist', function(done) {
      request(app)
        .delete('/api/moviemappingspoints/' + newMoviemappingspoint._id)
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
