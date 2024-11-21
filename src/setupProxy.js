const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

  console.log("Hello")

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://qa.fieldforceconnect.com',
      changeOrigin: true,
    })
  );
};