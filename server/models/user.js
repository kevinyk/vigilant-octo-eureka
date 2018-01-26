var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: {type: String}
})

mongoose.model('User', UserSchema);