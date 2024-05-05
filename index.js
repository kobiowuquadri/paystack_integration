const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./database/db')



const port = process.env.PORT

// Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// HOME
app.get('/', (req, res) => {
   res.send('Backend Working Successfully.')
})
   

app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})

connectToDB()