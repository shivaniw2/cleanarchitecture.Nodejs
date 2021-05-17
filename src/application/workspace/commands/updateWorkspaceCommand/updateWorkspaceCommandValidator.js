const Joi = require('joi');
const WorkspaceTypeEnum = require('./../../../../domain/enum/workspaceType');


const updateCommandSchema = Joi.object({
    workspaceName : Joi.string().min(5).max(50),
    location : Joi.string().min(5).max(50),
    attributes : Joi.array().items(Joi.string()),
    workspaceType : Joi.string().valid(...Object.values(WorkspaceTypeEnum)),
    status  : Joi.boolean()
})

function validateUpdateCommandPayload(updateCommandPayload) {
    const result = updateCommandSchema.validate(updateCommandPayload);
    return result;
  }

module.exports = {updateCommandSchema, validateUpdateCommandPayload};