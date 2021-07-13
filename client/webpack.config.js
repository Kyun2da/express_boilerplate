const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    // 어떤 파일을 진입파일로 설정할지 세팅
    main: './bin/www',
  },
  output: {
    // 결과 파일 경로와 이름 설정
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  // 로더 : 각 파일을 어떻게 처리할지 결정
  //   module: {
  //     rules: [

  //     ],
  //   },
};
