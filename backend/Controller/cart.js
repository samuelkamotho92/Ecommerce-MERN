const Orders = require('../Model/order')
exports.getAllCartItems = async(req,resp)=>{
    // const getUsers = await User.find();
// try{
// resp.statu(200).json({
//     status:'success',
//     data:getUsers
// })
// }catch(err){

// }
console.log('orders fetched');
resp.status(200).json({
    message:'orders fetched'
})
}

exports.createCartItems =  async(req,resp)=>{
    console.log(req.body)
    resp.status(200).json({
message:'order created'
    })
}