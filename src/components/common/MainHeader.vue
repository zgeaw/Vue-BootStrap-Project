<template>
  <div>
    <header class="mainHeader" :class="{'header-fixed': fixed}">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <router-link to="/" class="logo"><img src="../../assets/logo.png"></router-link>
          </div>
          <div class="col-md-6 text-right">
            <template v-if="!main">
              <router-link to="/" class="top-link black">返回首页</router-link>
            </template>
            <template v-else>
              <router-link to="/auth/reg/1" class="top-link yellow">注册</router-link>
              <router-link to="/auth" class="top-link yellow">登录</router-link>
            </template>
          </div>
        </div>
      </div>
    </header>
    <div class="menu" v-if="nav">
      <div class="container">
        <ul>
          <li :class="{active: (active == 'Home')}"><router-link to="/">首页</router-link></li>
          <li :class="{active: (active == 'About')}">
            <router-link to="/about/1">关于巨杉</router-link>
            <ul>
              <li><router-link to="/about/1">公司简介</router-link></li>
              <li><router-link to="/about/2">巨杉文化</router-link></li>
              <li><router-link to="/about/3">投资理念</router-link></li>
              <li><router-link to="/about/4">投研团队</router-link></li>
              <li><router-link to="/about/5">招贤纳士</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/new/0">巨杉视野</router-link>
            <ul>
              <li><router-link to="/new/1">巨杉资讯</router-link></li>
              <li><router-link to="/new/2">巨杉文化</router-link></li>
            </ul>
          </li>
          <li><router-link to="/product">产品服务</router-link></li>
          <li>
            <router-link to="/server">客户服务</router-link>
            <ul>
              <li><router-link to="/personal ">个人中心</router-link></li>
              <li><router-link to="/myProduct">我的产品</router-link></li>
              <li><router-link to="/feedback">投诉反馈</router-link></li>
            </ul>
          </li>
          <li><router-link to="/content">联系我们</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      fixed: {
        type: Boolean
      },
      main: {
        type: Boolean
      },
      nav: {
        type: Boolean
      },
      active: {
          type: String
      }
    }
  }
</script>
