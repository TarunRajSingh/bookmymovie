/**
 * Moviemappingspoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Moviemappingspoint from './moviemappingspoint.model';
var MoviemappingspointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MoviemappingspointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Moviemappingspoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MoviemappingspointEvents.emit(event + ':' + doc._id, doc);
    MoviemappingspointEvents.emit(event, doc);
  }
}

export default MoviemappingspointEvents;
