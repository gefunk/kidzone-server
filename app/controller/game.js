/**
Game Controller
@author gefunk
*/
const mongoose = require('mongoose');
const Game = mongoose.model('Game');
const Card = mongoose.model('Card');

// save new employee
exports.create = function(game_data, response){	
	const game = new Game(game_data);
	game.save(function(err){
		if(err) {console.log(err);response.json( err);}
		response.json(game); 
	});
}

/**
Function Find all
*/
exports.findAll = function(response){
	console.log("In Find all");
	Game.find({}, function(err, docs){
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
Delete Game
*/
exports.delete = function(id, response){
	console.log("Deleting by ID: ", id);
	Game.findByIdAndRemove(id, function(err){
		if(!err) response.json({'success': true});
		else response.json(err);
	});
}

/**
Find by Id
*/
exports.findById = function(id, response){
	console.log('Finding by id', id);
	Game.findById(id, function (err, doc) {
  		if(!err) response.json(doc);
		else response.json(err);
	}); 
}

/** play a game **/
exports.play = function(id, card_id, response){
	// find the game
	Game.findById(id, function (err, game) {
  		if(!err) {
  			// find the game
  			Card.findById(id, function (err, card) {
		  		if(!err) {
		  			// subtract the points for playing the game
		  			card.points = card.points - game.point_value;
		  			// save the new value of the game
		  			card.save(function(err){
		  				if(err) response.json(err);
		  				else{
		  					// add the fact that we played the game
		  					game.play.push({card: card});
		  					game.save(function(err){
		  						if(err) response.json(err);
		  						else{
		  							// send back the card
		  							response.json(
		  								{
		  									"result": "success",
		  									"card": card
		  								}
		  							);
		  						}
		  					});
		  				}

		  			});
		  				

		  		}
				else response.json(err);
			});
 		}
 		else response.json(err);
	
	});  		
	 
}