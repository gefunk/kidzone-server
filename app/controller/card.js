/**
Card Controller
@author gefunk
*/
const mongoose = require('mongoose');
const Card = mongoose.model('Card');

// save new employee
exports.create = function(card_data, response){	
	const card = new Card(card_data);
	card.save(function(err){
		if(err) {console.log(err);response.json( err);}
		response.json(card); 
	});
}

/**
Function Find all
*/
exports.findAll = function(response){
	Card.find({}, function(err, docs){
		if(!err){
			response.json(docs);
		} else {
			console.log(err);
			response.json(err);
		}
	});
}

/**
Delete card
*/
exports.delete = function(id, response){
	Card.remove({'card_id': id }, function(err){
		if(err) response.json(err);
		else response.json({'success': true});
	});
}

/**
Find Card by Card ID
*/
exports.findById = function(id, response){
	Card.findOne({'card_id': id}, function(err, card){
		if(err) response.json(err);
		else response.json(card);
	});
}

exports.addPoints = function(id, points, response){
	Card.findOneAndUpdate({'card_id': id}, { $inc: {points: points}}, function(err, card){
		if(err) response.json(err);
		response.json({"success":true});	
	});
}