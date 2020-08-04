<template>
    <div>
       <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
        <!-- class에 데이터를 넣어주고 싶을때 v-bind === : -->
        <div>
            <p>평균 시간 : {{}}</p>
            <button @click="onReset">reset</button>
        </div>
    </div>
</template>
<script>
    // Vue.component
    export default {
        data() {
            return {
                result: [],
                state: 'waiting',
                message: '클릭해서 시작하세요.',
            }
        },
        methods: {
            onReset() {

            },
            onClickScreen() {
                if (this.state === 'waiting') {
                    this.state = 'ready';
                } else if (this.state === 'ready') {
                    this.state = 'now'
                } else if (this.state === 'now') {
                    this.state = 'waiting'
                }
            }
        }
    }
</script>
<!--scoped : 현재 컴포넌트 안에서만 스타일을 사용-->
<style type="text/css" scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
        background-color: red;
    }

    #screen.waiting {
        background-color: cornflowerblue;
    }

    #screen.ready {
        background-color: crimson;
        color: #fff;
    }

    #screen.now {
        background-color: lime;
    }
</style>