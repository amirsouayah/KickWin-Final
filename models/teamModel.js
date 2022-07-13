
const mongoose = require('mongoose')
const teamSchema = new mongoose.Schema({
    name: { type: String,
        required: [true]
        
    },
    leader: {
        type: String,
        required: [false]
        
        
    },
    photo: {
        type: String,
        default: "https://res.cloudinary.com/kefioubeid/image/upload/v1652812425/avatar/download_awpzru.png"
    },
    city: {
        type: String,
        required: [true]
    },
    country: {
        type: String,
        required: [true]
    },
    players: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "playerModel",
          required: [true] 
        }
      ],
      CreatedAt:{
        type: Date,default :Date.now}
    

    
})

module.exports = mongoose.model("teams", teamSchema)