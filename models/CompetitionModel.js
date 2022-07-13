
const mongoose = require('mongoose')
const CompetitionSchema = new mongoose.Schema({
    type: { type: Boolean,
        required: [true]
        
    },
    name: {
        type: String,
        required: [true]
        
        
    },
    photo: {
        type: String,
        default: "https://res.cloudinary.com/kefioubeid/image/upload/v1652812425/avatar/download_awpzru.png"
    },
    // lastRegistration: {
    //     type: String,
    //     required: [true]
    // },
    startDate: {
        type: String,
        required: [true]
    },
    endDate: {
        type: String,
        required: [true]
    },
    prize: {
        type: String,
        required: [true]
    },
    teams: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "teamModel",
          required: [true] 
        }
      ],
      stades: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "stadeModel",
          required: [true] 
        }
      ],
      matchs: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "matchModel",
          required: [true] 
        }
      ],
      CreatedAt:{
        type: Date,default :Date.now}

    

    
})

module.exports = mongoose.model("competitions", CompetitionSchema)