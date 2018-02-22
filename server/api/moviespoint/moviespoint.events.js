/**
 * Moviespoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Moviespoint from './moviespoint.model';
var MoviespointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MoviespointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Moviespoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MoviespointEvents.emit(event + ':' + doc._id, doc);
    MoviespointEvents.emit(event, doc);
  }
}

export default MoviespointEvents;
