const stripe = require('stripe');
exports.stripePayments = async(req,resp)=>{
stripe.charges.create({
    source:req.body.tokenId,
    amount:req.body.amount,
    currency:"usd"
},
(stripeErr,stripeRes)=>{
    if(stripeErr){
       resp.status(500).json(stripeErr)
    }else{
        resp.status(200).json(stripeRes)
    }
}

)
}
