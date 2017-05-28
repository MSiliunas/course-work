module.exports = function (app, db) {
  require('./users')(app, db)
  require('./lectures')(app, db)
};