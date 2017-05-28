let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LectureSchema = new Schema({
  name: { type: String, required: true },
  lecturer: { type: Schema.ObjectId, ref: 'User' },
  lectureTimes: [{ type: Schema.ObjectId, ref: 'LectureTime' }],
  groups: []
});

module.exports = mongoose.model('Lecture', LectureSchema);