const User = require('../Model/user');
const CryptoJS =  require('crypto-js');
const jwt = require('jsonwebtoken');

// const createJWT = (id,isAdmin) => {
//     return jwt.sign({ id , isAdmin }, process.env.JWT_SEC, {
//       expiresIn: process.env.JWT_EXPIRES,
//     });
//   };
exports.registerUser = async(req,resp)=>{
try
{
    const {username,email,password,passwordConfirm} = req.body;
const registered = await User.create({username,email,password,passwordConfirm});
const accessToken = jwt.sign(
    {
        id: registered._id,
        isAdmin: registered.isAdmin,
    },
    process.env.JWT_SEC,
        {expiresIn:"3d"}
    );
resp.status(200).json({
    registered,
    accessToken
})
}catch(err){
resp.status(404).json({
    status:'fail',
    error:err
})
}
console.log(req.body);
}

exports.login = async(req,resp)=>{
    const {username,password} = req.body;
    console.log(req.body);
    try{
const user = await User.findOne({username
});
console.log(user);
const correct = await user.correctPassword(password, user.password);
const accessToken = jwt.sign(
    {
        id: user._id,
        isAdmin: user.isAdmin,
    },
    process.env.JWT_SEC,
        {expiresIn:"3d"}
    );
if(correct){
    console.log('user logged in')
    const {password,...info} = user._doc;
    resp.status(200).json({
        ...info,
        accessToken

    })
}
    }catch(err){
resp.status(404).json({
    status:'failure',
    error:err
})
    }
}
