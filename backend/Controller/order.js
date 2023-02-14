const Orders = require('../Model/order')
exports.getAllOrders = async(req,resp)=>{
    // const getUsers = await User.find();
// try{
// resp.statu(200).json({
//     status:'success',
//     data:getUsers
// })
// }catch(err){

// }
console.log('orderfetched');
resp.status(200).json({
    message:'order fetched'
})
}

exports.createOrder =  async(req,resp)=>{
    console.log(req.body)
    resp.status(200).json({
message:'order created'
    })
}