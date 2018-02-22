/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/seatbookingspoints              ->  index
 * POST    /api/seatbookingspoints              ->  create
 * GET     /api/seatbookingspoints/:id          ->  show
 * PUT     /api/seatbookingspoints/:id          ->  update
 * DELETE  /api/seatbookingspoints/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Seatbookingspoint from './seatbookingspoint.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Seatbookingspoints
export function index(req, res) {
  return Seatbookingspoint.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Seatbookingspoint from the DB
export function show(req, res) {
  return Seatbookingspoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Seatbookingspoint in the DB
export function create(req, res) {
  return Seatbookingspoint.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Seatbookingspoint in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Seatbookingspoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Seatbookingspoint from the DB
export function destroy(req, res) {
  return Seatbookingspoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
