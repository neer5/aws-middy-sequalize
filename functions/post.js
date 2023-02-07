const { middyAdapter } = require('../utils/middy');
const { createPostValidator } = require('../validators');
const { createPostHandler, listPostHandler } = require('../handlers/post');
const m1 = require('../temp/m1');
const m2 = require('../temp/m2');

const get = {
  handler: listPostHandler,
};

const create = {
  validationSchema: createPostValidator,
  handler: createPostHandler,
};

// Note: if you need to change order of middlewares then directly use middy() instead of middyAdapter()
module.exports = {
  list: middyAdapter(get),
  create: middyAdapter(create).use([m1(), m2()]),
};
