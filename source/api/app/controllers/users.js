let User = require('../models/user');
let Device = require('../models/device')

let users = {

  getUsers: (req, res) => {
    User.find((err, users) => {
      if (err) {
        res.send(err);
      } else {
        res.send(users);
      }
    })
  },

  getUser: (req, res) => {
    const id = req.params.user_id;
    User.findById(id, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    })
  },

  createUser: (req, res) => {
    const data = req.body
    let user = User()
    user.fullName = data.fullName
    user.role = data.role
    user.uid = data.uid
    user.password = data.password

    user.save((err) => {
      if (err) {
        res.send(err)
      }
      res.json(user)
    })
  },

  addDeviceForUser: (req, res) => {
    const userId = req.params.user_id

    let data = req.body

    if (!data.deviceId) {
      res.sendStatus(400)
    }

    User.findById(userId)
      .then(user => {
        let device = Device()
        device.uniqueDeviceId = data.deviceId
        device.user = user
        device.save((err) => {
          if (err) {
            res.send(err)
          }
          user.devices.push(device)
          user.save((err) => {
            if (err) {
              res.send(err)
            }
            res.json(user)
          })
        })
      }).catch(error => {
        if (error) {
          res.send(error)
        }
      })
  },

  login: (req, res) => {

  }

  // updateUser: function (req, res) {

  // },

  // removeUser: function (req, res) {

  // },

  // createFromFile: function (req, res) {

  // },

};

module.exports = users
