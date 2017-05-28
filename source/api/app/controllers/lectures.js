let Lecture = require('../models/lecture')
let LectureTime = require('../models/lectureTime')
let Participation = require('../models/participation')
let User = require('../models/user')

let lectures = {
  createLecture: (req, res) => {
    const data = req.body
    let lecture = Lecture()

    lecture.name = data.name
    lecture.lecturer = data.lecturer
    lecture.lectureTimes = data.lectureTimes
    lecture.groups = data.groups

    lecture.save((err) => {
      if (err) {
        res.send(err)
      } else {
        res.json(lecture)
      }
    })
  },

  attend: (req, res) => {
    const lectureId = req.params.lectureId
    let deviceId = req.body.deviceId

    if (!deviceId) {
      res.sendStatus(400)
    }

    User.find({ devices: deviceId })
      .then(users => {
        Lecture.findById(lectureId)
          .then(lecture => {
            let user = users[0]
            console.log(user)
            let participation = Participation()
            participation.lecture = lecture
            participation.user = user
            participation.save((err) => {
              if (err) {
                res.send(err)
              } else {
                res.json(participation)
              }
            })
          }).catch(err => {
            res.send(err)
          })
      })
  }
}

module.exports = lectures