import Vue from 'vue';
import ResponseCheck from "./ResponseCheck";
// main.js 랑 vue.js, script를 연결해준다.

new Vue(ResponseCheck).$mount('#root');
// $mount === el