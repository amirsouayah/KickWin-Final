
const mongoose = require('mongoose')
const stadeSchema = new mongoose.Schema({
    name: { type: String,
        required: [true]
        
    },
    country: {
        type: String,
        required: [true]
        
        
    },
    city: {
        type: String,
        required: [true]
    },
    address: {
        type: String,
        required: [true]
    },
    lattitude: {
        type: String,
        required: [true]
    },
    longitude: {
        type: String,
        required: [true]
    },
    size: {
        type: String,
        required: [true]
   
}, 
CreatedAt:{
    type: Date,default :Date.now}

    
})

module.exports = mongoose.model("stades", stadeSchema)