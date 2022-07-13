const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: Array,
        default: ["user"]
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/kefioubeid/image/upload/v1652812425/avatar/download_awpzru.png"
    },
    CreatedAt: {
        type: Date, default: Date.now
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)