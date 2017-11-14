<template>
  <section class="col-md-2">
    <ul class="left-nav">
      <li>
        <router-link to="/personal">· 个人中心</router-link>
      </li>
      <li>
        <router-link to="/myProduct/1" :class="{'router-link-active': myProduct}">· 我的产品</router-link>
      </li>
      <li>
        <router-link to="/feedback">· 投诉反馈</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  let VM
  export default {
    mounted() {
      VM = this
    },
    watch: {
      "$route": function (Route) {//监听路由变化
        if(Route.name == 'MyProduct'){
          VM.myProduct = true
        }else{
          VM.myProduct = false
        }
      }
    },
    data() {
      return {
        myProduct: false
      }
    }
  }
</script>
