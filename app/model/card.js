/**
Cards.js
@author gefunk

Models a RFID card usable to play games
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  card_id: {type: String},
  points : {type: Number, min: 0, default: 0},
  createdAt  : { type : Date, default : Date.now }
});


mongoose.model('Card', CardSchema);