<template>
  <div class="main">
    <MainHeader fixed/>
    <div class="login-bg" :style="loginHeight">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-md-offset-7">
            <div class="login" :style="loginMargin">
              <header class="title">
                用户登录
              </header>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon">
                    <img src="../../assets/icon1.png">
                  </div>
                  <input type="text" class="form-control" placeholder="用户名" v-model="name">
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon">
                    <img src="../../assets/icon2.png">
                  </div>
                  <input type="password" class="form-control" placeholder="密码" v-model="passWord">
                </div>
              </div>
              <div class="login-btn">
                <button type="submit" class="btn btn-warning btn-block" disabled v-if="!btnState">登录</button>
                <button type="submit" class="btn btn-warning btn-block" v-else>登录</button>
              </div>

              <div class="form-group">
                还不是会员？
                <router-link to="/auth/reg/1" class="yellow">免费注册</router-link>
                <p class="line"></p>
                <router-link to="/auth/forgotPassword">忘记密码</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MainFooter fixed/>
  </div>
</template>

<script>
  let VM
  import MainHeader from '../common/MainHeader'
  import MainFooter from '../common/MainFooter'
  import {getHeight, getHeaderFooterHeight, windowOnresize, siteConfig} from '../common/base'
  let height = getHeight(getHeaderFooterHeight)
  let loginView = 490
  export default {
    components: {MainHeader, MainFooter},
    mounted() {
      VM = this
      siteConfig.setTitle(siteConfig.nav[7])
      VM.windowOnresize()
    },
    data() {
      return {
        loginHeight: 'height:' + height + 'px',
        loginMargin: 'margin-top: ' + ((height - loginView) / 2) + 'px',
        name: '',
        passWord: '',
        btnState: false
      }
    },
    watch: {
      name(Value) {
        VM.validate()
      },
      passWord(Value) {
        VM.validate()
      }
    },
    methods: {
      windowOnresize() {
        windowOnresize(() => {
          let height = getHeight(getHeaderFooterHeight)
          let mainHeader = document.getElementsByClassName('mainHeader')[0]
          let mainFooter = document.getElementsByClassName('mainFooter')[0]
          if (height < loginView) {
            VM.loginHeight = 'height: ' + loginView + 'px; position: relative; margin: 0;'
            VM.loginMargin = 'margin: 0;position: relative;'
            mainHeader.classList.remove('header-fixed')
            mainFooter.classList.remove('footer-fixed')
          } else {
            VM.loginHeight = 'height:' + height + 'px'
            VM.loginMargin = 'margin-top: ' + ((height - loginView) / 2) + 'px'
            mainHeader.classList.add('header-fixed')
            mainFooter.classList.add('footer-fixed')
          }
        })
      },
      validate() {
        if (VM.name && VM.passWord) {
          VM.btnState = true
        } else {
          VM.btnState = false
        }
      }
    }
  }
</script>
