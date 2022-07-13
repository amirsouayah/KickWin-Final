
const mongoose = require('mongoose')
const LeagueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true]

    },
    numOfTeams: {
        type: String,
        required: [true]

    },
    prize: {
        type: String,
        required: [true]
    },

    startDate: {
        type: String,
        required: [true]
    },
    endDate: {
        type: String,
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
    photo: {
        type: String,
        default: "https://res.cloudinary.com/kefioubeid/image/upload/v1656787278/avatar/league_yezgnd.jpg"
    },
    desc: {
        type: String,
        required: [true]
    },
    teams: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "teamModel",

        }
    ],
    matchs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "matchModel",

        }
    ],


    CreatedAt: {
        type: Date, default: Date.now
    }




})

module.exports = mongoose.model("leagues", LeagueSchema)