module.exports = () => {
  return {
    before: async handler => {
      console.log('========Extra middleware M2: before');
    },
    onError: async handler => {
      console.log('========Extra middleware M2: error');
    },
  };
};
