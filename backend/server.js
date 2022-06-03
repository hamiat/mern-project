const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routing
app.use('/api/cards', require('./routes/cardRoutes'))

//override default (express) error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}.`))