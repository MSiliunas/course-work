let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GroupSchema = new Schema({
  name: { type: String, required: true },
  parent: { type: Schema.ObjectId, ref: 'Group' },
  users: [{ type: Schema.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('Group', GroupSchema);