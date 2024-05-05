const mongoose = require('mongoose')

const connectToDB = async () => {
   try {
     await mongoose.connect(process.env.MONGODB_URL)
     console.log("Connected to database Successfully.")
   }
   catch(err){
    console.log(err.message)
   }
}

module.exports = connectToDB