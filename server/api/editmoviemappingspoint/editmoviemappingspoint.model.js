'use strict';

import mongoose from 'mongoose';

var EditmoviemappingspointSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Editmoviemappingspoint', EditmoviemappingspointSchema);
