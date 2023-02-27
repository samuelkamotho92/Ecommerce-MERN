const User = require('../Model/user')
const CryptoJS = require('crypto-js');
const bcrypt = require('bcrypt');
exports.getAllUsers = async(req,resp)=>{
    try{
        const query = req.query.new;
        // query ? await User.find().sort({ _id: -1 }).limit(5):
const users = query ? await User.find().sort({ _id: -1 }).limit(5):await User.find();
console.log(users)
resp.status(200).json(users)
    }catch(err){
resp.status(404).json({
    status:'failure',
    error:err
})
    }
}

exports.createUser =  async(req,resp)=>{
    console.log(req.body)
    resp.status(200).json({
message:'user created'
    })
}

exports.update = async (req,resp)=>{
    console.log(req.body);
    if(req.body.password){
req.body.password = await bcrypt.hash(req.body.password,10);
console.log(req.body.password);
}
   
    try{
        const id = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true
        });
        console.log(updatedUser);
        const {password,...info} = updatedUser._doc;
      return  resp.status(201).json({
            status:"success",
            ...info
        })
    }catch(err){
        resp.status(404).json({
            status:'failure',
            error:err
        })
    }   
}

exports.delete = async(req,resp)=>{
    try{
        const id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(id);
        console.log(deleteUser);
        resp.status(200).json({
            status:'success',
            data:[]
        })
    }catch(err){
       resp.status(404).json({
        status:'fail',
        error:err
       })
    }
}
exports.getOneUser = async(req,resp)=>{
    console.log('get user one')
    try{
const id = req.params.id;
console.log(id)
const getUser = await User.findById(id);
const {password,...info} = getUser._doc;
resp.status(200).json({
...info
})
    }catch(err){
resp.status(404).json({
    status:'failure',
    error:err
})
    }
}

exports.getStats = async(req,resp)=>{
    console.log('statistics ')
    // resp.status(200).json('statistcs')
    const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
console.log(lastYear,date)
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    console.log(data);
    resp.status(200).json(data)
  } catch (err) {
    resp.status(500).json(err);
  }
}