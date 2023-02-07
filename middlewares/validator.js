const customError = require('../utils/customError');
const eventFields = {
  body: 'body',
  path: 'pathParameters',
  qs: 'queryStringParameters',
};

module.exports = schema => {
  return {
    before: async handler => {
      const { event } = handler;
      const errors = [];
      Object.keys(schema).forEach(path => {
        if (eventFields[path]) {
          const reqData = event[eventFields[path]] || {};
          const { error } = schema[path].validate(reqData, {
            abortEarly: false,
          });
          if (error) {
            const { details } = error;
            details.forEach(error => {
              errors.push(error.message);
            });
          }
        }
      });
      if (errors.length) {
        throw customError(errors.join(', '), 422);
      }
    },
  };
};
