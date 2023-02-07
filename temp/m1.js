module.exports = () => {
  return {
    after: async handler => {
      console.log('========Extra middleware M1: after');
    },
    onError: async handler => {
      console.log('========Extra middleware M1: error');
    },
  };
};
