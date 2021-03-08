(async function () {
  const commonDBConnection = await require("../config/connectDB");

  module.exports = commonDBConnection;
})();
