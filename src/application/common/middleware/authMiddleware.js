const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req,res,next){
    const token = req.header('x-auth-header');
    if(!token) return res.status(401).send('Access denied, no token provided');

    try{
        const decodedPayload = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decodedPayload;
        // we can use this too now => req.user._id
        next();
    }
    catch(exc)
    {
        res.status(400).send('Invalid ytoken');
    }
}

module.exports = auth;