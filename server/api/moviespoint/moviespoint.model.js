'use strict';

import mongoose from 'mongoose';

var MoviespointSchema = new mongoose.Schema({
  Poster:String,
  Title:String,
  Year:Number,
  Cast:String,
  Duration:String,
  Genre:String,
  Director:String,
  Id:String
});

export default mongoose.model('Moviespoint', MoviespointSchema);
