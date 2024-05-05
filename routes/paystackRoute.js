const paystackRoute = require('express').Router()

const payMoney = require('../controller/paystackController')

paystackRoute.post('/make-payment', payMoney)


module.exports = paystackRoute