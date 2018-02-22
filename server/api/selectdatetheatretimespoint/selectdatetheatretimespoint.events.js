/**
 * Selectdatetheatretimespoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Selectdatetheatretimespoint from './selectdatetheatretimespoint.model';
var SelectdatetheatretimespointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SelectdatetheatretimespointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Selectdatetheatretimespoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SelectdatetheatretimespointEvents.emit(event + ':' + doc._id, doc);
    SelectdatetheatretimespointEvents.emit(event, doc);
  }
}

export default SelectdatetheatretimespointEvents;
