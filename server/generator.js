

const login = require('./modules/login');

module.exports = function () {
  return {
    ...login,
  };
};
