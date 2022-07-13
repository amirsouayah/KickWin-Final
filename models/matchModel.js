
const mongoose = require('mongoose')
const matchSchema = new mongoose.Schema({

  matchName: {
    type: String,

    default: "random match"

  },

  maxSlot: {
    type: String,
    required: [true]

  },
  date: {
    type: String,
    required: [true]

  },
  scoreTeam1: {
    type: Number,
    default: 0

  },
  scoreTeam2: {
    type: Number,
    default: 0

  },
  code: {
    type: Number,
    default:
      function () {
        val = Math.floor(1000 + Math.random() * 9000)
        return val;
      }

  },
  // time: {
  //     type: String,
  //     required: [true]    
  // },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teamModel",
      required: [true]
    }
  ],
  stadium: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "stadeModel",
      required: [true]
    }
  ],
  CreatedAt: {
    type: Date, default: Date.now
  }


})

module.exports = mongoose.model("matchs", matchSchema)