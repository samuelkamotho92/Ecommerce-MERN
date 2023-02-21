const stripe = require('stripe')(process.env.STRIPE_KEY);
exports.stripePayments = async(req,resp)=>{
    console.log(req.body);
    try
    {
        stripe.charges.create({
            source:req.body.tokenId,
            amount:req.body.amount,
            currency:"usd"
        },
        (stripeErr,stripeRes)=>{
            if(stripeErr){
                resp.status(500).json({
                    status:'fail',
                    stripeErr  })
            }else{
                resp.status(200).json({
                    status:'success',
                    stripeRes
                })
            }
        }
        )
    }catch(err){
resp.status(404).json({
    status:'failure',
    error:err
})
    }

}
