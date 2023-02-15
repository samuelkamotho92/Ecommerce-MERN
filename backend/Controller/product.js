const Products = require('../Model/product')
exports.getAllProduct = async(req,resp)=>{

    const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Products.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Products.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Products.find();
    }
    resp.status(200).json(products);
  } catch (err) {
    resp.status(500).json(err);
  }

}

exports.createProduct =  async(req,resp)=>{
    try {
      const savedProduct = await Products.create(req.body);
      resp.status(200).json(savedProduct);
    } catch (err) {
      resp.status(500).json(err);
    }
}

exports.updateProduct = async(req,resp)=>{
    try {
        const updatedProduct = await Products.findByIdAndUpdate(
          req.params.id,req.body,
          { 
            new:true,
            runValidators:true
          }
        );
        resp.status(200).json(updatedProduct);
      } catch (err) {
        resp.status(404).json(err)
      }
}
exports.deleteProduct = async(req,resp)=>{
    try {
        await Products.findByIdAndDelete(req.params.id);
        resp.status(200).json("Product has been deleted...");
      } catch (err) {
        resp.status(500).json(err);
      }
    
}

exports.getOneProduct = async(req,resp)=>{
    try{
        const product = await Products.findById(req.params.id);
        resp.status(200).json(product);
    }catch(err){
      resp.status(500).json(err)
    }
}

