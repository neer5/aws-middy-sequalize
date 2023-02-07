const Post = require('../models/post');
const User = require('../models/user');

const listPostHandler = async () => {
  const posts = await Post.findOne({
    where: { name: "alice" },
    attributes: ['id', 'name'],
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'name']
      }
    ]
  });
  return {
    posts,
  };
};

const createPostHandler = async event => {
  const post = await Post.create(event.body);
  return {
    post,
  };
};

module.exports = { listPostHandler, createPostHandler };
