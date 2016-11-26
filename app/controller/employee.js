/**
Employee Controller
@author gefunk
*/

const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

// save new employee
exports.create = function(employee_data, response){	
	const employee = new Employee(employee_data);
	employee.save(function(err){
		if(err) {console.log(err);response.json( err);}
		response.json(employee); 
	});
}

/**
Function Find all
*/
exports.findAll = function(response){
	console.log("In Find all");
	Employee.find({}, function(err, docs){
		console.log("Returned find all", err, docs);
		if(!err){
			response.json(docs);
		} else {
			console.log(err);
			response.json(err);
		}
	});
}

/**
Delete Employee
*/
exports.delete = function(id, response){
	console.log("Deleting by ID: ", id);
	Employee.findByIdAndRemove(id, function(err){
		if(!err) response.json({'success': true});
		else response.json(err);
	});
}

exports.findById = function(id, response){
	console.log('Finding by id', id);
	Employee.findById(id, function (err, doc) {
  		if(!err) response.json(doc);
		else response.json(err);
	}); 
}

