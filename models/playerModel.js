
const mongoose = require('mongoose')
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Svp entrer votre nom"]

    },
    age: {
        type: Number,
        required: [true]


    },
    photo: {
        type: String,
        default: "https://res.cloudinary.com/kefioubeid/image/upload/v1652812425/avatar/download_awpzru.png"
    },
    phone: {
        type: Number,
        required: [true]
    },
    posInfo: {
        type: String,
        required: [true]
    },

    CreatedAt: {
        type: Date, default: Date.now
    }

})

module.exports = mongoose.model("players", playerSchema)