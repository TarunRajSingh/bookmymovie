'use strict';

var app = require('../..');
import request from 'supertest';

var newSeatbookingspoint;

describe('Seatbookingspoint API:', function() {

  describe('GET /api/seatbookingspoints', function() {
    var seatbookingspoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/seatbookingspoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          seatbookingspoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(seatbookingspoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/seatbookingspoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/seatbookingspoints')
        .send({
          name: 'New Seatbookingspoint',
          info: 'This is the brand new seatbookingspoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSeatbookingspoint = res.body;
          done();
        });
    });

    it('should respond with the newly created seatbookingspoint', function() {
      expect(newSeatbookingspoint.name).to.equal('New Seatbookingspoint');
      expect(newSeatbookingspoint.info).to.equal('This is the brand new seatbookingspoint!!!');
    });

  });

  describe('GET /api/seatbookingspoints/:id', function() {
    var seatbookingspoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/seatbookingspoints/' + newSeatbookingspoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          seatbookingspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      seatbookingspoint = {};
    });

    it('should respond with the requested seatbookingspoint', function() {
      expect(seatbookingspoint.name).to.equal('New Seatbookingspoint');
      expect(seatbookingspoint.info).to.equal('This is the brand new seatbookingspoint!!!');
    });

  });

  describe('PUT /api/seatbookingspoints/:id', function() {
    var updatedSeatbookingspoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/seatbookingspoints/' + newSeatbookingspoint._id)
        .send({
          name: 'Updated Seatbookingspoint',
          info: 'This is the updated seatbookingspoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSeatbookingspoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSeatbookingspoint = {};
    });

    it('should respond with the updated seatbookingspoint', function() {
      expect(updatedSeatbookingspoint.name).to.equal('Updated Seatbookingspoint');
      expect(updatedSeatbookingspoint.info).to.equal('This is the updated seatbookingspoint!!!');
    });

  });

  describe('DELETE /api/seatbookingspoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/seatbookingspoints/' + newSeatbookingspoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when seatbookingspoint does not exist', function(done) {
      request(app)
        .delete('/api/seatbookingspoints/' + newSeatbookingspoint._id)
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
