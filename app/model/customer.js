

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  first_name: { type : String, default : '', trim : true },
  last_name: { type : String, default : '', trim : true },
  comments: [{
    body: { type : String, default : '' },
    user: { type : Schema.ObjectId, ref : 'User' },
    createdAt: { type : Date, default : Date.now }
  }],
  image: {
    cdnUri: String,
    files: []
  },
  createdAt  : { type : Date, default : Date.now }
});

CustomerSchema.path('first_name').required(true, 'First name cannot be blank');
CustomerSchema.path('last_name').required(true, 'Last Name cannot be blank');

mongoose.model('Customer', CustomerSchema);