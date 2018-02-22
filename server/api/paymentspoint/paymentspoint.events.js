/**
 * Paymentspoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Paymentspoint from './paymentspoint.model';
var PaymentspointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PaymentspointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Paymentspoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PaymentspointEvents.emit(event + ':' + doc._id, doc);
    PaymentspointEvents.emit(event, doc);
  }
}

export default PaymentspointEvents;
