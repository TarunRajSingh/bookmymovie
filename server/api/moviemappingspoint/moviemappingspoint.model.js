'use strict';

import mongoose from 'mongoose';

var MoviemappingspointSchema = new mongoose.Schema({
  PosterToMap:String,
  MovieToMap:String,
  CityToMap:String,
  TheatreToMap:String,
  DateToMap:Array,
  ShowTimings:Array,
  Genre:Array,
  Duration:Number
});

export default mongoose.model('Moviemappingspoint', MoviemappingspointSchema);
