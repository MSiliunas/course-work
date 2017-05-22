let users = {
  init: function (db) {
    this.db = db
  },

  getUser: function (req, res) {
    const id = req.params.id;
    const details = { '_id': id };
    this.db.collection('users').findOne(details, (err, item) => {
      if (err) {
        res.send({'error': 'User not found'});
      } else {
        res.send(item);
      }
    });
  }

  // updateUser: function (req, res) {

  // },

  // removeUser: function (req, res) {

  // },

  // addDeviceForUser: function (req, res) {

  // },

  // createFromFile: function (req, res) {

  // },

  // createUser: function (req, res) {

  // }

};

module.exports = (db) => {
  users.init(db);
  return users;
};
