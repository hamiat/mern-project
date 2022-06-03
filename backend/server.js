const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routing
app.use('/api/cards', require('./routes/cardRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}.`))