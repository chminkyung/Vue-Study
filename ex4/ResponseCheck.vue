<template>
    <div>
       <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
        <!-- class에 데이터를 넣어주고 싶을때 v-bind === : -->
        <div>
            <p>평균 시간 : {{(result.reduce((a, c) => a + c, 0)) / result.length || 0}}ms</p>
            <button @click="onReset">reset</button>
        </div>
    </div>
</template>
<script>
    let startTime = 0;
    let endTime = 0;
    let timeOut = 0;
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
                this.result = [];
            },
            onClickScreen() {
                if (this.state === 'waiting') {
                    this.state = 'ready';
                    this.message = '초록색이 되면 클릭하세요';
                    timeOut = setTimeout(() => {
                        this.state = 'now';
                        this.message = '지금 클릭!';
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
                } else if (this.state === 'ready') {
                    clearTimeout(timeOut);
                    this.state = 'waiting'
                    this.message = '초록색이 된 후에 클릭하세요'
                } else if (this.state === 'now') {
                    endTime = new Date();
                    this.state = 'waiting';
                     this.message = '클릭해서 시작하세요.';
                    this.result.push(endTime - startTime);
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