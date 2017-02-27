var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./app/models/user');
var Group = require('./app/models/group');

var TransactionSchema = new Schema({
    amount: Number,
    user: Schema.Types.ObjectId,
    group: Schema.Types.ObjectId
});

module.exports = mongoose.model('Transaction', TransactionSchema);
