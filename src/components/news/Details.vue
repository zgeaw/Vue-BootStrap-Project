<template>
  <div class="main">
    <MainHeader main nav active="News"/>
    <div class="banner-ny"></div>
    <div class="container">
      <ol class="breadcrumb">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/about/1">巨杉视野</router-link>
        </li>
        <li class="active" v-text="columnTitle"></li>
      </ol>
      <div class="bgWhite news">
        <div class="row">
          <section class="col-md-2">
            <ul class="left-nav">
              <li :class="{'router-link-active': (aboutType == 1)}">
                <router-link to="/news/1">· 巨杉资讯</router-link>
              </li>
              <li :class="{'router-link-active': (aboutType == 2)}">
                <router-link to="/news/2">· 市场动态</router-link>
              </li>
            </ul>
          </section>
          <section class="col-md-10 pl0">
            <h3 class="details-title"><span v-text="columnTitle"></span><em></em></h3>
            <div class="details newsDetails">
              <h2 class="title">巨杉净值线2号临时开放公告</h2>
              <p class="meta">
                <span class="time">2017-11-09</span>
                来源：本站
              </p>
              <div class="text-center">
                <div class="bdsharebuttonbox" data-bd-bind="1510219734088"><a href="#" data-cmd="more" class="bds_more"></a><a href="#" data-cmd="qzone" title="分享到QQ空间" class="bds_qzone"></a><a href="#" data-cmd="tsina" title="分享到新浪微博" class="bds_tsina"></a><a href="#" data-cmd="tqq" title="分享到腾讯微博" class="bds_tqq"></a><a href="#" data-cmd="renren" title="分享到人人网" class="bds_renren"></a><a href="#" data-cmd="weixin" title="分享到微信" class="bds_weixin"></a></div>
              </div>
              <div class="line"></div>
              <div class="show-content">
                <p>
                  尊敬的资产委托人：
                </p>
                <p>
                  【巨杉净值线15号私募证券投资基金】于2017年9月22日结束募集。根据合同规定，【巨杉净值线15号私募证券投资基金】于2017年9月27日成立并生效，
                  并将于近日向中国证券投资基金业协会提交产品备案。
                </p>
                <p>特此公告。</p>
                <p> </p>
                <p> </p>
                <p style="text-align:right">巨杉（上海）资产管理有限公司</p>
                <p style="text-align:right">2017年9月</p>

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
  import {siteConfig, bdshare} from '../common/base'
  export default {
    components: {MainHeader, MainFooter},
    mounted() {
      VM = this
      VM.setAboutTitle(VM.aboutType)
      siteConfig.setTitle('巨杉净值线2号临时开放公告 - ' + siteConfig.nav[2])
      bdshare()
    },
    watch: {
      "$route": function (Route) {//监听路由变化
        VM.aboutType = Route.params.type
        VM.setAboutTitle(Route.params.type)
      }
    },
    data() {
      return {
        aboutType: parseInt(this.$route.params.type),
        columnTitle: '巨杉资讯'
      }
    },
    methods: {
      setAboutTitle (Value) {
        if (Value == 2) {
          VM.columnTitle = '市场动态'
        } else {
          VM.columnTitle = '巨杉资讯'
        }
      }
    }
  }
</script>
