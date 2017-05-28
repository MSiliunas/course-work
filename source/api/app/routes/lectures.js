module.exports = function (app, db) {
  let lectures = require('../controllers/lectures')

  app.route('/lectures')
    .post(lectures.createLecture)

  app.route('/lectures/:lectureId/attend')
    .post(lectures.attend)
}