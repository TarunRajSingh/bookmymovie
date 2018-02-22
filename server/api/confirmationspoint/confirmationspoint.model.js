'use strict';

import mongoose from 'mongoose';

var ConfirmationspointSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Confirmationspoint', ConfirmationspointSchema);
