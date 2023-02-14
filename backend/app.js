const express = require('express');
const userRoute = require('./Views/user');
const authRoute = require('./Views/auth');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/users',userRoute);
app.use('/api/v1/auth',authRoute)
module.exports = app;