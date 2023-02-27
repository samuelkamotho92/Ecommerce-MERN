const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'./.env'});
const app = require('./app')
const port = process.env.PORT;
const dburl = process.env.DBURL;
mongoose.set('strictQuery',false);
mongoose.connect(dburl).then(()=>{
    app.listen(port,()=>{
        console.log(`app is ready and running on port:${port}`);
    })
}).catch((err)=>{
    console.log(err);
})

