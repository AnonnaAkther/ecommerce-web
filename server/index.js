// const express = require('express')
// const app = express()
// require('dotenv').config()
// // const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const { toast } = require('react-toastify')

// app.use(bodyParser.urlencoded)({extended: true})
// app.use(bodyParser.json())

// app.use(cors())

// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// const session = await stripe.checkout.sessions.create({
//   payment_method_types: ['card'],
//   line_items: [{
//     price: 'price_1HKiSf2eZvKYlo2CxjF9qwbr',
//     quantity: 1,
//   }],
//   mode: 'subscription',
//   success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
//   cancel_url: 'https://example.com/cancel',
// });

// // app.post('/payment', cors(), async(req, res)=>{
// //     let {amount, id} = req.body
// //     try {
// //         const payment = await stripe.paymentIntents.create({
// //             amount,
// //             currency: "USD",
// //             payment_method: id,
// //             confirm: true
// //         })
// //         console.log(payment)
// //         res.json({
// //             message: "Payment Successfull",
// //             success: true
// //         })
// //     } catch (error) {
// //         toast.error('Your Card number is invalid')
// //         console.log("Error", error);
// //         res.json({
// //             message: "Payment Failed",
// //             success: false
// //         })
// //     }
// // })

// app.listen(process.env.PORT || 4000, ()=>{
//     console.log('server is listening on port 3000');
// })
