const { response } = require('express');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "S3CRET";
//for verifying only
function auth(req,res,next){
    const token = req.headers.token;
    const currUser = jwt.verify(token,JWT_SECRET);
    if(currUser){
        req.userId = currUser.id;
        next();
    }
    else{
        res.status(403).json({
            message: "You Are not signed in"
        })
    }
}

//export modules auth and jt secret 
module.exports({
    auth,
    JWT_SECRET
});
