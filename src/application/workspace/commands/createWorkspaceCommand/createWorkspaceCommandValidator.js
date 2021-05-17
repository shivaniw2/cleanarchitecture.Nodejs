const Joi = require('joi');
const WorkspaceTypeEnum = require('./../../../../domain/enum/workspaceType');


const createCommandSchema = Joi.object({
    workspaceName : Joi.string().min(5).max(50).required(),
    location : Joi.string().min(5).max(50).required(),
    attributes : Joi.array().items(Joi.string()),
    workspaceType : Joi.string().valid(...Object.values(WorkspaceTypeEnum)),
    status  : Joi.boolean().required()
})

function validateCreateCommandPayload(createCommandPayload) {
    const result = createCommandSchema.validate(createCommandPayload);
    return result;
  }

module.exports = {createCommandSchema, validateCreateCommandPayload};