const mongoose = require("mongoose")

const paystackSchema = mongoose.Schema({
  fullName: {
    type:String,
    required: true
  },
  email : {
     type: String,
     required: true 
  }, 
  amount: {
    type: Number,
    required: true
  },
  payment_url: {
    type: String,    
  }, 
  reference: {
    type: String
  }
})

const Paystack = mongoose.model('Paystack', paystackSchema)

module.exports = Paystack