/**
 * Movieratingspoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Movieratingspoint from './movieratingspoint.model';
var MovieratingspointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MovieratingspointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Movieratingspoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MovieratingspointEvents.emit(event + ':' + doc._id, doc);
    MovieratingspointEvents.emit(event, doc);
  }
}

export default MovieratingspointEvents;
