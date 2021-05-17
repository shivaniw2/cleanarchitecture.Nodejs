const Joi = require('joi');


const createUserSchema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(10).max(255).required().email(),
    password: Joi.string().min(6).max(1025).required(),
})

function validateCreateUserCommandPayload(createUserCommandPayload) {
    const result = createUserSchema.validate(createUserCommandPayload);
    return result;
  }

module.exports = {createUserSchema, validateCreateUserCommandPayload};