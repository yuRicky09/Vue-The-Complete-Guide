module.exports = {
  // 方式一
  // 簡易開啟代理服務器，proxy的值為要轉發請求的地址
  // devServer: {
  //   proxy: "http://localhost:5000",
  // },

  // 方式二
  // 配置多個代理服務器
  devServer: {
    proxy: {
      // 請求前綴詞，請求路徑包含這前綴詞才會走轉發
      "/api": {
        target: "http://localhost:5000",
        // 真正去port5000要request時會把/api用空字串替代
        pathRewrite: { "^/api": "" },
        ws: true,
        changeOrigin: true,
      },
      "/demo": {
        target: "http://localhost:5001",
        pathRewrite: { "^/demo": "" },
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
