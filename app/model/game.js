 /**
Games
@author rahulgokulnath
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: { type : String, default : '', trim : true },
  image: {
    cdnUri: String,
    files: []
  },
  play: [{
  	time: { type: Date, default: Date.now },
  	card: { type: Schema.Types.ObjectId, ref: 'Card' }
  }],
  point_value: {type: Number},
  createdAt  : { type : Date, default : Date.now }
});

GameSchema.path('name').required(true, 'Name cannot be blank');
GameSchema.path('point_value').required(true, 'Have to provide number of points to play game');

mongoose.model('Game', GameSchema);