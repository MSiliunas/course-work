let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DeviceSchema = new Schema({
  uniqueDeviceId: { type: String, index: { unique: true, dropDups: true } },
  user: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Device', DeviceSchema);