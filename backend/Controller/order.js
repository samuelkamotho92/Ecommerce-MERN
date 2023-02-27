const Orders = require('../Model/order')
exports.getAllOrders = async(req,resp)=>{
    try {
        const order = await Orders.find();
        resp.status(200).json(order);
      } catch (err) {
        resp.status(500).json(err);
      }

}

exports.createOrder =  async(req,resp)=>{
 try
 {
    const savedOrder = await Orders.create(req.body);
    resp.status(200).json(savedOrder);

 }catch(err){
    resp.status(500).json(err);
 }

}

exports.updateOrder = async(req,resp)=>{
    try {
        const updatedOrder = await Orders.findByIdAndUpdate(
          req.params.id,req.body,
          { 
            new:true,
            runValidators:true
          }
        );
        resp.status(200).json(updatedOrder);
      } catch (err) {
        resp.status(404).json(err)
      }
    }

    exports.deleteOrder = async(req,resp)=>{
        try {
            await Orders.findByIdAndDelete(req.params.id);
            resp.status(200).json("Product has been deleted...");
          } catch (err) {
            resp.status(500).json(err);
          }
    }

    exports.getOneOrder = async(req,resp)=>{
        try{
            const order = await Orders.findById(req.params.id);
            resp.status(200).json(order);
        }catch(err){
          resp.status(500).json(err)
        }
    }

    exports.getIncome = async(req,resp)=>{
      const productId = req.query.pid;
      const date = new Date();
      const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
      const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    
      try {
        const income = await Orders.aggregate([
          {
            $match: {
              createdAt: { $gte: previousMonth },
              ...(productId && {
                products: { $elemMatch: { productId } },
              }),
            },
          },
          {
            $project: {
              month: { $month: "$createdAt" },
              sales: "$amount",
            },
          },
          {
            $group: {
              _id: "$month",
              total: { $sum: "$sales" },
            },
          },
        ]);
        resp.status(200).json(income);
      } catch (err) {
        resp.status(500).json(err);
      }
    }