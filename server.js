// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
<<<<<<< HEAD
=======
const bands = require('./controllers/bands_controller')
>>>>>>> 79d7a133160c7dd4072405bedb1f1f6f8a9dbf9d

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
<<<<<<< HEAD

const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    username: 'postgres',
    password: 'admin'
})
=======
>>>>>>> 79d7a133160c7dd4072405bedb1f1f6f8a9dbf9d

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

<<<<<<< HEAD
// CONTROLLERS
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const eventController = require('./controllers/event_controller')
app.use('/event', eventController)

const stageController = require('./controllers/stage_controller')
app.use('/stage', stageController)
=======
// CONTROLLERS  
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)

const stagesController = require('./controllers/stages_controller')
app.use('/stages', stagesController)
>>>>>>> 79d7a133160c7dd4072405bedb1f1f6f8a9dbf9d

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})