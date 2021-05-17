

const {validateCreateUserCommandPayload} = require('../../user/commands/createUserCommand/createUserCommandValidator');

module.exports = function(req,res,next){
    var result = validateCreateUserCommandPayload(req.body);
            if(result.error) return res.status(400).send(result.error);
            next();
}