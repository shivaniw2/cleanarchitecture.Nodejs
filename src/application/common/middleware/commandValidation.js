
const CommandType = require('./../constant');
const {validateCreateCommandPayload} = require('./../../workspace/commands/createWorkspaceCommand/createWorkspaceCommandValidator');
const {validateUpdateCommandPayload} = require('./../../workspace/commands/updateWorkspaceCommand/updateWorkspaceCommandValidator');
const {validateDeleteCommandPayload} = require('./../../workspace/commands/deleteWorksapceCommand/deleteWorkspaceCommandValidator');


module.exports = function(req,res,next,commandType){
    switch(commandType){
        case CommandType.Create:
            var result = validateCreateCommandPayload(req.body);
            if(result.error) return res.status(400).send(result.error);
            next();
            break;
        case CommandType.Update:
            var result = validateUpdateCommandPayload(req.body);
            if(result.error) return res.status(400).send(result.error);
            next();
            break;
        case CommandType.Delete:
            var result = validateDeleteCommandPayload({id: req.params.id});
            if(result.error) return res.status(400).send(result.error);
            next();
            break;
        default:
                break;
    }
}