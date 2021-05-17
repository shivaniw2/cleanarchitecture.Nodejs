const Joi = require('Joi');
Joi.objectId = require('joi-objectid')(Joi)


const deleteCommandScehma = Joi.object({
    id: Joi.objectId()
})

function validateDeleteCommandPayload(deleteCommandPayload) {
    const result = deleteCommandScehma.validate(deleteCommandPayload);
    return result;
  }

module.exports = {deleteCommandScehma, validateDeleteCommandPayload};