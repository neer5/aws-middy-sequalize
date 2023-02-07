module.exports = () => {
  return {
    after: async handler => {
      const { response } = handler;
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    },
    onError: async handler => {
      const { error } = handler;
      return {
        statusCode: error.code || 500,
        body: JSON.stringify({
          message: error.toString(),
        }),
      };
    },
  };
};
