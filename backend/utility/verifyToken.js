const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SEC, (err,user) => {
        if (err){
            return res.status(403).json("Token is not valid!");
        } 

        req.user = user;
        console.log(req.user);
        next();
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  };

const verifyTokenAuthourization = async (req,resp,next)=>{
    console.log('user not sent')
    console.log(req.user.isAdmin);
    if (req.user.id === req.params.id || req.user.isAdmin) {
        return next();
       } else {
         resp.status(403).json("You are not alowed to do that!");
       }
}

const verifyTokenAdmin = async(req,resp,next)=>{
    console.log(req.user)
    if (req.user.isAdmin) {
        next();
      } else {
        resp.status(403).json("You are not alowed to do that,admin action needed!");
      }
}
module.exports = {
    verifyToken,
    verifyTokenAdmin,
    verifyTokenAuthourization
    }