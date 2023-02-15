const express = require('express');
const userRoute = require('./Views/user');
const authRoute = require('./Views/auth');
const prodRoute = require('./views/Product');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/users',userRoute);
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/prod',prodRoute);
module.exports = app;