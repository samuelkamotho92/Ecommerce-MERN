const Cart = require('../Model/cart')
exports.getAllCartItems = async(req,resp)=>{
    try {
        const carts = await Cart.find();
        resp.status(200).json(carts);
      } catch (err) {
        resp.status(500).json(err);
      }
}

exports.createCartItems =  async(req,resp)=>{
    try {
        const savedCart = await Cart.create(req.body);
        resp.status(200).json(savedCart);
      } catch (err) {
        resp.status(500).json(err);
      }
}

exports.updateCart = async(req,resp)=>{
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
          req.params.id,req.body,
          { 
            new:true,
            runValidators:true
          }
        );
        resp.status(200).json(updatedCart);
      } catch (err) {
        resp.status(404).json(err)
      }
}

exports.deleteCart = async(req,resp)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id);
        resp.status(200).json("Product has been deleted...");
      } catch (err) {
        resp.status(500).json(err);
      }
    
}

exports.getOneCart = async(req,resp)=>{
    try{
        const product = await Cart.findById(req.params.id);
        resp.status(200).json(product);
    }catch(err){
      resp.status(500).json(err)
    }
}