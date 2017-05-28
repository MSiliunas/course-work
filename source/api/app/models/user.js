let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  fullName: { type: String, required: true },
  role: { type: String, enum: ['student', 'lecturer'], required: true },
  uid: { type: String, required: true },
  password: { type: String, required: true },
  devices: [{ type: Schema.ObjectId, ref: 'Device' }]
});

module.exports = mongoose.model('User', UserSchema);