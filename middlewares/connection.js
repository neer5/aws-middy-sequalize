const { sequelize } = require('../config/db');

// cache database connection
let sequalizeConn = null;

module.exports.initSequelize = () => {
  const loadSequelize = async () => {
    await sequelize
      .authenticate()
      .then(() => {
        console.log(
          '============================= sequalize connection successfull'
        );
      })
      .catch(err =>
        console.log(
          '============================= sequalize connection error',
          err
        )
      );
    return sequelize;
  };
  return {
    before: async () => {
      if (!sequalizeConn) {
        sequalizeConn = await loadSequelize();
      } else {
        // restart connection pool to ensure connections are not re-used across invocations
        sequalizeConn.connectionManager.initPools();

        // restore `getConnection()` if it has been overwritten by `close()`
        if (sequalizeConn.connectionManager.hasOwnProperty('getConnection')) {
          delete sequalizeConn.connectionManager.getConnection;
        }
      }
    },
  };
};
