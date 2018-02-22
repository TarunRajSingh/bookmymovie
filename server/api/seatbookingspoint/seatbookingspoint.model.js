'use strict';

import mongoose from 'mongoose';

var SeatbookingspointSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Seatbookingspoint', SeatbookingspointSchema);
