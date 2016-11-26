/** Contains all routes in application **/

const customers = require("./app/controller/customer");
const employees = require("./app/controller/employee");
const cards = require("./app/controller/card");


module.exports = function (app){


  app.get('/', function(req, res){
	 res.send('hello world');
  });

  app.get('/json', function(req, res){
    res.json({hello: 'world'});
  });

  app.post('/customer/create', function(req, res){
    console.log("In customers create"+req.body.first_name);
    result = customers.create(req.body);
    res.json(result);
  });


  // Card routes
  // all cards
  app.get('/cards', function(req, res){
    cards.findAll(res);
  });
  // get card by id
  app.get('/card/:id', function(req, res){
    cards.findById(req.params.id, res);
  });
  // create new card
  app.post('/card', function(req, res){
    cards.create(req.body, res);
  });
  // delete card
  app.delete('/card/:id', function(req, res){
    cards.delete(req.params.id, res);
  });

  // point routes
  // add points
  app.post('/card/points/add/:id', function(req,res){
    cards.addPoints(req.params.id, req.body.points, res);
  });

  // game routes
  // get all games
  app.get('/games', function(req, res){

  });
  // get game by id
  app.get('/game/:id', function(req,res){

  });
  // add a game
  app.post('/game', function(req, res){

  });
  // delete a game
  app.delete('/game/:id', function(req, res){

  });
  // modify game
  app.post('/game/modify', function(req, res){

  });
  // play a game
  app.post('/game/play/:cardid', function(req, res){

  });

  app.post('/', function(req, res){
    console.log(req.body);
    res.json(req.body);
  });


  // employee routes
  // get all employees
  app.get('/employees', function(req, res){
    employees.findAll(res);
  });
  // create new employee
  app.post('/employee', function(req, res){
    employees.create(req.body, res);
  });
  // get employee by id
  app.get('/employee/:id', function(req, res){
    employees.findById(req.params.id, res);
  });
  // delete employee by id
  app.delete('/employee/:id', function(req, res){
    employees.delete(req.params.id, res);
  });
  // Clock routes
  // clock in
  app.post('/clock/in/:employeeid', function(req, res){

  });
  // clock out
  app.post('/clock/out/:employeeid', function(req, res){

  });



  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }

    console.error(err.stack);

    if (err.stack.includes('ValidationError')) {
      res.status(422).render('422', { error: err.stack });
      return;
    }

    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res) {
    res.status(404).json({"invalid":"url"});
  });
}