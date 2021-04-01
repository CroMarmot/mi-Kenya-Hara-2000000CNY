const path = require('path');
const resolve = function (filePath) {
    return path.join(__dirname, '..', filePath)
}
export default {
    input: resolve('src/main.js'), // 入口文件
    output: { // 出口文件
        file: resolve('dist/bundle.js'),
        format: 'umd',
        name: 'miKenyaHara2000000CNY'
    }
};
