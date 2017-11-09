<template>
  <div class="main">
    <MainHeader/>
    <div class="container">
      <div class="reg" :style="regHeight">
        <section class="reg-tabs">
          <router-link to="/auth/forgotPassword">找回密码</router-link>
        </section>
        <div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-3 control-label"><span class="required">*</span> 手机号码</label>
            <div class="col-sm-5">
              <input type="text" class="form-control" v-model="tel">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label"><span class="required">*</span> 短信验证码</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" v-model="code">
            </div>
            <div class="col-sm-2 pl0">
              <CodeCount :value="tel" :callBack="getCode"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label"><span class="required">*</span> 重置密码</label>
            <div class="col-sm-5">
              <input type="password" class="form-control" v-model="passWord">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label"><span class="required">*</span> 确认密码</label>
            <div class="col-sm-5">
              <input type="password" class="form-control" v-model="confirmationPassword">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-5">
              <button type="submit" class="btn btn-warning btn-block" disabled v-if="!btnState">保存</button>
              <button type="submit" class="btn btn-warning btn-block" v-else>保存</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MainFooter/>
  </div>
</template>
<script>
  let VM
  import MainHeader from '../common/MainHeader'
  import MainFooter from '../common/MainFooter'
  import CodeCount from './CodeCount'
  import {siteConfig, arcAlert, getHeight, getHeaderFooterHeight, windowOnresize} from '../common/base'
  let height = getHeight(getHeaderFooterHeight) - 40
  export default {
    components: {MainHeader, MainFooter, CodeCount},
    mounted() {
      VM = this
      siteConfig.setTitle(siteConfig.nav[8])
      VM.windowOnresize()
    },
    watch: {
      tel (Value) {//监听路由变化
        VM.validate()
      },
      code (Value) {//监听路由变化
        VM.validate()
      },
      passWord (Value) {//监听路由变化
        VM.validate()
      },
      confirmationPassword (Value) {//监听路由变化
        VM.validate()
      }
    },
    data() {
      return {
        regHeight: 'height:' + height + 'px',
        tel: '',
        code: '',
        passWord: '',
        confirmationPassword: '',
        btnState: false
      }
    },
    methods: {
      getCode() {
        arcAlert('验证码已发送！')
      },
      validate() {
        if (VM.tel && VM.code && VM.passWord && VM.confirmationPassword) {
          VM.btnState = true
        } else {
          VM.btnState = false
        }
      },
      windowOnresize() {
        if (height < 500) {
          VM.regHeight = 'height: auto'
        }
        windowOnresize(() => {
          let height = getHeight(getHeaderFooterHeight) - 40
          if (height <= 500) {
            VM.regHeight = 'height: auto'
          } else {
            VM.regHeight = 'height:' + height + 'px'
          }
        })
      }
    }
  }
</script>
