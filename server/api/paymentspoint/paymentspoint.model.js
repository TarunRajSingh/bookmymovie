'use strict';

import mongoose from 'mongoose';

var PaymentspointSchema = new mongoose.Schema({
  MovieName:String,
  SeatNumber:Number,
  CityName:String,
  Theatre:String,
  Time:String,
  Seat:Array,
  Total:Number,
  MovieDate:String
});

export default mongoose.model('Paymentspoint', PaymentspointSchema);
