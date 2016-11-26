/**
Employee
@author rahulgokulnath
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  first_name: { type : String, default : '', trim : true },
  last_name: { type : String, default : '', trim : true },
  birth_date  : { type : Date, default : Date.now },
  clock_history: [{
    in: { type : Date },
    out: { type : Date }
  }],
  createdAt  : { type : Date, default : Date.now }
});

EmployeeSchema.path('first_name').required(true, 'First name cannot be blank');
EmployeeSchema.path('last_name').required(true, 'Last Name cannot be blank');

mongoose.model('Employee', EmployeeSchema);