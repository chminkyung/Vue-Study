import Vue from 'vue';
import NumberBaseball from "./NumberBaseball";
// main.js 랑 vue.js, script를 연결해준다.

new Vue(NumberBaseball).$mount('#root');
// $mount === el