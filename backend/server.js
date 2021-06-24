const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/route')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,() => {console.log("database connected")})

let authorized = false;

var auth = function(req, res, next) {
    if (authorized) {
        next()
    } else {
      res.status(403).send('Unauthorized!')
      return
    }
  }

app.use('/',auth);
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and running"));