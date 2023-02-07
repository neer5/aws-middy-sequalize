module.exports = (message, code) => {
  const errorRes = new Error(message);
  errorRes.code = code || 500;
  return errorRes;
};
