/**
 * Editmoviemappingspoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Editmoviemappingspoint from './editmoviemappingspoint.model';
var EditmoviemappingspointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EditmoviemappingspointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Editmoviemappingspoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    EditmoviemappingspointEvents.emit(event + ':' + doc._id, doc);
    EditmoviemappingspointEvents.emit(event, doc);
  }
}

export default EditmoviemappingspointEvents;
