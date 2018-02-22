'use strict';

var app = require('../..');
import request from 'supertest';

var newSelectdatetheatretimespoint;

describe('Selectdatetheatretimespoint API:', function() {

  describe('GET /api/selectdatetheatretimespoints', function() {
    var selectdatetheatretimespoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/selectdatetheatretimespoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          selectdatetheatretimespoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(selectdatetheatretimespoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/selectdatetheatretimespoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/selectdatetheatretimespoints')
        .send({
          name: 'New Selectdatetheatretimespoint',
          info: 'This is the brand new selectdatetheatretimespoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSelectdatetheatretimespoint = res.body;
          done();
        });
    });

    it('should respond with the newly created selectdatetheatretimespoint', function() {
      expect(newSelectdatetheatretimespoint.name).to.equal('New Selectdatetheatretimespoint');
      expect(newSelectdatetheatretimespoint.info).to.equal('This is the brand new selectdatetheatretimespoint!!!');
    });

  });

  describe('GET /api/selectdatetheatretimespoints/:id', function() {
    var selectdatetheatretimespoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/selectdatetheatretimespoints/' + newSelectdatetheatretimespoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          selectdatetheatretimespoint = res.body;
          done();
        });
    });

    afterEach(function() {
      selectdatetheatretimespoint = {};
    });

    it('should respond with the requested selectdatetheatretimespoint', function() {
      expect(selectdatetheatretimespoint.name).to.equal('New Selectdatetheatretimespoint');
      expect(selectdatetheatretimespoint.info).to.equal('This is the brand new selectdatetheatretimespoint!!!');
    });

  });

  describe('PUT /api/selectdatetheatretimespoints/:id', function() {
    var updatedSelectdatetheatretimespoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/selectdatetheatretimespoints/' + newSelectdatetheatretimespoint._id)
        .send({
          name: 'Updated Selectdatetheatretimespoint',
          info: 'This is the updated selectdatetheatretimespoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSelectdatetheatretimespoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSelectdatetheatretimespoint = {};
    });

    it('should respond with the updated selectdatetheatretimespoint', function() {
      expect(updatedSelectdatetheatretimespoint.name).to.equal('Updated Selectdatetheatretimespoint');
      expect(updatedSelectdatetheatretimespoint.info).to.equal('This is the updated selectdatetheatretimespoint!!!');
    });

  });

  describe('DELETE /api/selectdatetheatretimespoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/selectdatetheatretimespoints/' + newSelectdatetheatretimespoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when selectdatetheatretimespoint does not exist', function(done) {
      request(app)
        .delete('/api/selectdatetheatretimespoints/' + newSelectdatetheatretimespoint._id)
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
