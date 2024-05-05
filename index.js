const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./database/db')
const paystackRoute = require('./routes/paystackRoute')


const port = process.env.PORT

// Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(paystackRoute)


// HOME
app.get('/', (req, res) => {
   res.send('Backend Working Successfully.')
})
   

app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})

connectToDB()