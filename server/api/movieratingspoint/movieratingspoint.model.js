'use strict';

import mongoose from 'mongoose';

var MovieratingspointSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Movieratingspoint', MovieratingspointSchema);
