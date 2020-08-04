<template>
    <div>
       <div id="screen">{{message}}</div>
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

            }
        }
    }
</script>
<style>

</style>