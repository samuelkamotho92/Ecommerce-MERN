const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const {isEmail} = require('validator');
const UserSchema = new Schema(
  {
    username: {
         type: String,
        required: [true,'please enter your username'], 
        unique: [true,'user does exist']
    },
    email: {
         type: String, 
         required:[true,'email does exist'], 
         unique: [true,'email already in use'],
         validate:[isEmail,'please enter a valid email']
        },
    password: { 
        type: String,
        required: [true,'password is required'],
        minlength:[8,'please enter more than 8 characters']
    },
    passwordConfirm:{
        type: String,
        required: [true,'password is required'],
        minlength:[8,'please enter more than 8 characters'],
        validate:{
            validator:function (pass) {
                return pass == this.password
            },
            message:'please enter the correct password confirmation'
        }
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    this.passwordConfirm = undefined;
    next();
})

UserSchema.methods.correctPassword = async function 
(pass,userpassword) {
  return  await bcrypt.compare(pass,userpassword)
}

// UserSchema.methods.changedPasswordAfter = function (jwttimestamp) {
    
//     if(this.passwordChangedAt){
// const changetimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
// //settime aways less than when it was changed 
// return jwttimestamp < changetimestamp;
//     }

//     return false;
// }

module.exports = mongoose.model("User", UserSchema);