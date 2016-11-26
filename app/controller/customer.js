// customer.js

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = function(customer_data){	
	const customer = new Customer(customer_data);
	console.log("Customer: "+customer);
	customer.save(function(err){
		if(err) {console.log(err);return err;} 
		console.log("Save successful");
		// saved successfully
		return true;
	});
	console.log("Done");
}