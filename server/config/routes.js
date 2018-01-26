var Users = require('./../controllers/users.js');
module.exports = function(app){
	app.get('/api/users', Users.index);
	app.post('/api/users', Users.create);
	app.get('/api/current_user', Users.current);
	app.post('/api/login', Users.login);
}
