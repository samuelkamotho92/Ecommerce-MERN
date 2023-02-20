const express = require('express');
const userRoute = require('./Views/user');
const authRoute = require('./Views/auth');
const prodRoute = require('./views/Product');
const cartRoute = require('./views/cart');
const orderRoute = require('./Views/Order');
const paymentRoute = require('./Views/payments');
const cors = require('cors');
const app = express();
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/users',userRoute);
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/product',prodRoute);
app.use('/api/v1/cart',cartRoute);
app.use('/api/v1/order',orderRoute);
app.use('/api/v1/pay',paymentRoute)

module.exports = app;