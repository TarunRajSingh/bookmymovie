'use strict';

var app = require('../..');
import request from 'supertest';

var newEditmoviemappingspoint;

describe('Editmoviemappingspoint API:', function() {

  describe('GET /api/editmoviemappingspoints', function() {
    var editmoviemappingspoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/editmoviemappingspoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          editmoviemappingspoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(editmoviemappingspoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/editmoviemappingspoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/editmoviemappingspoints')
        .send({
          name: 'New Editmoviemappingspoint',
          info: 'This is the brand new editmoviemappingspoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newEditmoviemappingspoint = res.body;
          done();
        });
    });

    it('should respond with the newly created editmoviemappingspoint', function() {
      expect(newEditmoviemappingspoint.name).to.equal('New Editmoviemappingspoint');
      expect(newEditmoviemappingspoint.info).to.equal('This is the brand new editmoviemappingspoint!!!');
    });

  });

  describe('GET /api/editmoviemappingspoints/:id', function() {
    var editmoviemappingspoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/editmoviemappingspoints/' + newEditmoviemappingspoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          editmoviemappingspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      editmoviemappingspoint = {};
    });

    it('should respond with the requested editmoviemappingspoint', function() {
      expect(editmoviemappingspoint.name).to.equal('New Editmoviemappingspoint');
      expect(editmoviemappingspoint.info).to.equal('This is the brand new editmoviemappingspoint!!!');
    });

  });

  describe('PUT /api/editmoviemappingspoints/:id', function() {
    var updatedEditmoviemappingspoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/editmoviemappingspoints/' + newEditmoviemappingspoint._id)
        .send({
          name: 'Updated Editmoviemappingspoint',
          info: 'This is the updated editmoviemappingspoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedEditmoviemappingspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEditmoviemappingspoint = {};
    });

    it('should respond with the updated editmoviemappingspoint', function() {
      expect(updatedEditmoviemappingspoint.name).to.equal('Updated Editmoviemappingspoint');
      expect(updatedEditmoviemappingspoint.info).to.equal('This is the updated editmoviemappingspoint!!!');
    });

  });

  describe('DELETE /api/editmoviemappingspoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/editmoviemappingspoints/' + newEditmoviemappingspoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when editmoviemappingspoint does not exist', function(done) {
      request(app)
        .delete('/api/editmoviemappingspoints/' + newEditmoviemappingspoint._id)
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
