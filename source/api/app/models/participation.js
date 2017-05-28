let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ParticipationSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  lecture: { type: Schema.ObjectId, ref: 'Lecture', required: true },
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Participation', ParticipationSchema);