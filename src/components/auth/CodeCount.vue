<template>
  <button class="btn btn-default" v-text="codeText" v-if="!codeStart" @click="codeFinish"></button>
  <button class="btn btn-default" v-text="codeText" disabled v-else></button>
</template>
<script>
  let VM
  const codeTime = 30
  export default {
    props: {
        callBack: {
            type: Function
        }
    },
    mounted() {
      VM = this
    },
    data() {
      return {
        codeText: '获取验证码',
        codeNumber: codeTime,
        codeStart: false
      }
    },
    methods: {
      codeFinish() {//获取短信验证码倒计时
        if(VM.codeNumber == codeTime){
          VM.callBack()
        }
        setTimeout(function(){
          if(VM.codeNumber > 0){
            VM.codeStart = true
            VM.codeNumber = VM.codeNumber - 1
            VM.codeText = VM.codeNumber + '秒'
            VM.codeFinish()
          }else{
            VM.codeText = "重新获取"
            VM.codeNumber = codeTime
            VM.codeStart = false
          }
        },1000)
      }
    }
  }
</script>
