require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))
//routes
app.use('/user', require('./routes/userRouter'))
app.use('/stadium', require('./routes/stadeRouter'))
app.use('/team', require('./routes/teamRouter'))
app.use('/player', require('./routes/PlayerRouter'))
app.use('/match', require('./routes/MatchRouter'))
app.use('/league', require('./routes/LeagueRouter'))
app.use('/cup', require('./routes/CupRouter'))
app.use('/competition', require('./routes/competitionRouter'))

app.use('/api', require('./routes/upload'))
app.use('/calendar', require('./controllers/calendarController'))





// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log("Connected to mongodb")
})





const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})
