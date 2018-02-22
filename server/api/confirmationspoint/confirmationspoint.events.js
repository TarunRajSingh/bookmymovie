/**
 * Confirmationspoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Confirmationspoint from './confirmationspoint.model';
var ConfirmationspointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ConfirmationspointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Confirmationspoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ConfirmationspointEvents.emit(event + ':' + doc._id, doc);
    ConfirmationspointEvents.emit(event, doc);
  }
}

export default ConfirmationspointEvents;
