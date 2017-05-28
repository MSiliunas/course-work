let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LectureTimeSchema = new Schema({
  weekday: { type: String, enum: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'], required: true },
  lecture: { type: Schema.ObjectId, ref: 'Lecture', required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model('LectureTime', LectureTimeSchema);