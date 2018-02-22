/**
 * Seatbookingspoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Seatbookingspoint from './seatbookingspoint.model';
var SeatbookingspointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SeatbookingspointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Seatbookingspoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SeatbookingspointEvents.emit(event + ':' + doc._id, doc);
    SeatbookingspointEvents.emit(event, doc);
  }
}

export default SeatbookingspointEvents;
