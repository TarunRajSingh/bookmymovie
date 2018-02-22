'use strict';

var app = require('../..');
import request from 'supertest';

var newAddtheatrespoint;

describe('Addtheatrespoint API:', function() {

  describe('GET /api/addtheatrespoints', function() {
    var addtheatrespoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/addtheatrespoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          addtheatrespoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(addtheatrespoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/addtheatrespoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/addtheatrespoints')
        .send({
          name: 'New Addtheatrespoint',
          info: 'This is the brand new addtheatrespoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAddtheatrespoint = res.body;
          done();
        });
    });

    it('should respond with the newly created addtheatrespoint', function() {
      expect(newAddtheatrespoint.name).to.equal('New Addtheatrespoint');
      expect(newAddtheatrespoint.info).to.equal('This is the brand new addtheatrespoint!!!');
    });

  });

  describe('GET /api/addtheatrespoints/:id', function() {
    var addtheatrespoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/addtheatrespoints/' + newAddtheatrespoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          addtheatrespoint = res.body;
          done();
        });
    });

    afterEach(function() {
      addtheatrespoint = {};
    });

    it('should respond with the requested addtheatrespoint', function() {
      expect(addtheatrespoint.name).to.equal('New Addtheatrespoint');
      expect(addtheatrespoint.info).to.equal('This is the brand new addtheatrespoint!!!');
    });

  });

  describe('PUT /api/addtheatrespoints/:id', function() {
    var updatedAddtheatrespoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/addtheatrespoints/' + newAddtheatrespoint._id)
        .send({
          name: 'Updated Addtheatrespoint',
          info: 'This is the updated addtheatrespoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAddtheatrespoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAddtheatrespoint = {};
    });

    it('should respond with the updated addtheatrespoint', function() {
      expect(updatedAddtheatrespoint.name).to.equal('Updated Addtheatrespoint');
      expect(updatedAddtheatrespoint.info).to.equal('This is the updated addtheatrespoint!!!');
    });

  });

  describe('DELETE /api/addtheatrespoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/addtheatrespoints/' + newAddtheatrespoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when addtheatrespoint does not exist', function(done) {
      request(app)
        .delete('/api/addtheatrespoints/' + newAddtheatrespoint._id)
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
