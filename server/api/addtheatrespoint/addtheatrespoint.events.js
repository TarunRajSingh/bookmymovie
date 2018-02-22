/**
 * Addtheatrespoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Addtheatrespoint from './addtheatrespoint.model';
var AddtheatrespointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AddtheatrespointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Addtheatrespoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AddtheatrespointEvents.emit(event + ':' + doc._id, doc);
    AddtheatrespointEvents.emit(event, doc);
  }
}

export default AddtheatrespointEvents;
