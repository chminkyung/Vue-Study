const path = require('path'); // node가 만들어둔 script

// script들을 하나로 합치기 위해 webpack을 씀
module.exports = { // node의 module을 만들었다.
    entry: {
        app: path.join(__dirname, 'main.js'), // app : 나중에 하나로 합쳐질 파일 이름
    },
    module: { // webpack의 핵심
        rules: [{ // 어떻게 합칠지 어떻게 처리할건지

        }]
    },
    plugins: [],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'), // 폴더 경로 path.join === 현재경로
    },
};