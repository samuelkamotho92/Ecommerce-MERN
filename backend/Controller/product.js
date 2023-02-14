const Products = require('../Model/product')
exports.getAllProduct = async(req,resp)=>{
    // const getUsers = await User.find();
// try{
// resp.statu(200).json({
//     status:'success',
//     data:getUsers
// })
// }catch(err){

// }
console.log('prodfetched');
resp.status(200).json({
    message:'product fetched'
})
}

exports.createProduct =  async(req,resp)=>{
    console.log(req.body)
    resp.status(200).json({
message:'product created'
    })
}