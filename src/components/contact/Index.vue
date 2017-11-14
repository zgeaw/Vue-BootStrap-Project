<template>
  <div class="main">
    <MainHeader main nav active="Contact"/>
    <div class="banner-ny"></div>
    <div class="container">
      <ol class="breadcrumb">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li class="active" v-text="columnTitle"></li>
      </ol>
      <div class="bgWhite news">
        <div class="row">
          <section class="col-md-12">
            <h3 class="details-title"><span v-text="columnTitle"></span><em></em></h3>
            <div class="row contact">
              <div class="col-md-7">
                <img src="../../assets/contact.png" class="img-responsive">
              </div>
              <div class="col-md-5">
                <p>
                  地址：上海市浦东新区芳甸路1155号浦东嘉里城2201室<br>
                  邮编：201204<br>
                  <b>电话：021-68781961</b>
                </p>
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
  export default {
    components: {MainHeader, MainFooter},
    mounted() {
      VM = this
      siteConfig.setTitle(siteConfig.nav[4])
    },
    data() {
      return {
        columnTitle: '联系我们'
      }
    },
    methods: {}
  }
</script>
