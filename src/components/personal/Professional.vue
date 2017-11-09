<template>
  <div class="main">
    <MainHeader main nav active="Personal"/>
    <div class="container">
      <ol class="breadcrumb">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/personal">客服服务</router-link>
        </li>
        <li class="active" v-text="columnTitle"></li>
      </ol>
      <div class="bgWhite news">
        <div class="row">
          <section class="col-md-12">
            <h3 class="details-title"><span v-text="columnTitle"></span><em></em></h3>
            <div class="authentication">

              <div class="tit">账户类申请表</div>
              <UpLoad/>

              <div class="tit">投资经历</div>
              <UpLoad/>

              <div class="tit">转换申请表</div>
              <UpLoad/>

              <div class="text-center">
                <div class="row">
                  <div class="col-md-2 col-md-offset-4">
                    <router-link to="/personal" class="btn btn-gary btn-block">取消</router-link>
                  </div>
                  <div class="col-md-2">
                    <button type="button" class="btn btn-warning btn-block">提交</button>
                  </div>
                </div>
              </div>

            </div>
          </section>
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
  import {siteConfig} from '../common/base'
  import UpLoad from '../common/UpLoad'
  export default {
    components: {MainHeader, MainFooter, UpLoad},
    mounted() {
      VM = this
      siteConfig.setTitle(siteConfig.nav[11])
    },
    data() {
      return {
        columnTitle: siteConfig.nav[11]
      }
    },
    methods: {}
  }
</script>
