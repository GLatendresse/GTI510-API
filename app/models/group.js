var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./app/models/user');

var GroupSchema = new Schema({
    name: String,
    users: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Group', GroupSchema);
