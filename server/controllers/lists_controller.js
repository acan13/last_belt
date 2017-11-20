var List = require('../models/List.js')
var session = require('express-session')

module.exports = {
  index: (req,res) => {
    console.log('running lists index method')
    List.find({}, (err,lists) => {
      if (err) {
        console.log('error finding lists')
        console.log(err)
        return res.json(err)
      } else {
        console.log('found lists')
        return res.json(lists)
      }
    })
  },
  destroy: (req,res) => {
    List.findByIdAndRemove(req.params.list_id, (err,list) => {
      if (err) {
        console.log('error finding list')
        console.log(err)
        return res.json(err)
      } else {
        console.log('deleted list')
        return res.json(list)
      }
    })
  },
  update: (req,res) => {
    console.log('running list update method')
    List.findOne({_id:req.params.list_id}, (err, list) => {
      if (err) {
        console.log('error finding list')
        console.log(err)
        return res.json(err)
      } else {
        // do something with the list
        list.save((error) => {
          if (error) {
            console.log('error saving list')
            return res.json(error)
          } else {
            console.log('updated list')
            return res.json(list)
          }
        })
      }
    })
  },
  show: (req,res) => {
    console.log('running lists show route')
    List.findOne({_id:req.params.list_id},(err,list) => {
      if (err) {
        console.log('error finding list')
        return res.json(err)
      } else {
        console.log('found list')
        return res.json(list)
      }
    })
  },
  create: (req,res) => {
    console.log('running lists create method')
    var list = new List(req.body)
    list.save((err) => {
      if (err) {
        console.log('error creating list')
        console.log(err)
        return res.json(err)
      } else {
        console.log('created list')
        return res.json(list)
      }
    })
  }
}
