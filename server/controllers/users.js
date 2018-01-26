var mongoose = require('mongoose');
// WHOOPS
var User = mongoose.model('User');
module.exports = {
	index: function(req,res){
		res.json("I haven't done this yet.");
	},
	create: function(req,res){
		res.json("I haven't done this yet.");
	},
	current: function(req,res){
		console.log('Users.current');
		User.findOne({_id: req.session.userId}, function(err, foundUser){
			if(err){
				console.log('oops');
				res.json(err);
			}else{
				console.log('here is the user', foundUser);
				res.json(foundUser);
			}
		})
	},
	login: function(req,res){
		// is the user in the DB?
		console.log('Users.login');
		User.findOne({name: req.body.name}, function(err, foundUser){
			if(err){
				console.log('whaa');
				res.json(err);
			}else if(foundUser==null){
				console.log('no user in DB, creating...');
				var newUser = new User(req.body);
				newUser.save(function(err){
					if(err){
						console.log('failed validation');
						res.json(err);
					}else{
						console.log('created new user, adding to session');
						req.session.userId = newUser._id;
						res.json(newUser);
					}
				})
			}else{
				console.log('user IN DB, adding to session');
				req.session.userId = foundUser._id;
				res.json(foundUser);
			}
		})
	},


}