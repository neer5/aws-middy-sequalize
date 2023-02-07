const Joi = require('joi');

const createPostValidator = {
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    userId: Joi.number().required(),
  })
    .required()
    .unknown(true),
  /*
  qs: Joi.object({
    name: Joi.string().required(),
  })
    .required()
    .unknown(true),
  path: Joi.object({
    description: Joi.string().required(),
  })
    .required()
    .unknown(true),
  */
};

module.exports = { createPostValidator };
