let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  fullName: String
});

module.exports = mongoose.model('User', UserSchema);