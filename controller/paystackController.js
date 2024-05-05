const Paystack = require('../models/paystackModel')
const axios = require("axios")


const payMoney = async (req, res) => {
  try {
    const {email, amount, fullName } = req.body
    const payment = await axios.post(process.env.PAYSTACK_BASE_URL, req.body, {
      headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json"
      }
    })
    // console.log("new payment", payment)
    const newPayment = new Paystack({
      fullName,
      email, 
      amount: amount*1000,
      payment_url: payment.data.data.authorization_url,
      reference: payment.data.data.reference
    })
    const savedPayment = await newPayment.save()
    res.status(201).json({success: true, message: "Payment initialize successfully.", savedPayment })
  }
  catch(err){
    console.log(err.message)
  }
}

module.exports = payMoney