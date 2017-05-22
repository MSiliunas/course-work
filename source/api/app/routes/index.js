module.exports = function (app, db) {  
  app.use('/users', require('./users')(db));
};