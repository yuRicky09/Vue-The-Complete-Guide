// If your frontend app and the backend API server are not running on the same host, you will need to proxy API requests to the API server during development. This is configurable via the devServer.proxy option in vue.config.js.
module.exports = {
  devServer: {
    host: "localhost",
  },
};
