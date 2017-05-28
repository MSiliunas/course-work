module.exports = function (app, db) {
  let users = require('../controllers/users')

  app.route('/users')
    .get(users.getUsers)
    .post(users.createUser)
  app.route('/users/:user_id')
    .get(users.getUser)
  app.route('/users/:user_id/devices')
    .post(users.addDeviceForUser)
}