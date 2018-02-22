'use strict';

import mongoose from 'mongoose';

var AddtheatrespointSchema = new mongoose.Schema({
  City: String,
  Location: String,
  Theatre: String
});

export default mongoose.model('Addtheatrespoint', AddtheatrespointSchema);
