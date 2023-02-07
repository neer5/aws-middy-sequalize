'use strict';

const middy = require('@middy/core');
const jsonBodyParser = require('@middy/http-json-body-parser');
const { initSequelize, validator, response } = require('../middlewares');
const m1 = require('../temp/m1');

module.exports.middyAdapter = ({ handler, validationSchema, ...rest }) => {
  const res = middy().handler(handler).use(jsonBodyParser()).use(response());
  if (validationSchema) res.use(validator(validationSchema));
  res.use(initSequelize());

  return res;
};
