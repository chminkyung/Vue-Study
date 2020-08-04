const VueLoaderPlugin = require('vue-loader/lib/plugin'); // webpack은 node 환경이기 때문에 require
const path = require('path'); // node가 만들어둔 script

// script들을 하나로 합치기 위해 webpack을 씀
module.exports = { // node의 module을 만들었다.
    mode: 'development', // 개발 버전 : development, 베포 버전 : production
    devtool: 'eval', // 속도가 빨라짐 // 개발 버전 : eval, 베포 버전 : hidden-source-map
    resolve: {
        extensions: ['.js', '.vue'], // 확장자들 처리 (import할 때 확장자 안써줘도 됨)
    },
    entry: {
        app: path.join(__dirname, 'main.js'), // app : 나중에 하나로 합쳐질 파일 이름
    },
    module: { // webpack의 핵심
        rules: [{ // 어떻게 합칠지, 어떻게 처리할건지
            test: /\.vue$/, // 파일 명이 .vue로 끝나는 파일
            loader: 'vue-loader',
        },{
            test: /\.css$/,
            loader: [
                'vue-style-loader',
                'css-loader',
            ]
        }]
    },
    plugins: [ // 모듈들이 처리하다가 후처리,
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'), // 폴더 경로 path.join === 현재경로
        publicPath: '/dist' // webpack-dev-server를 사용하기 위해서
    },
};