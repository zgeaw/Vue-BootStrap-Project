<template>
  <div class="main">
    <MainHeader main nav active="Home" />
    <div class="banner"></div>
    <div class="container">
      <ul class="row home-about">
        <li class="col-md-4">
          <router-link to="/about/1" class="thumbnail">
            <h3 class="title">公司简介</h3>
            <img src="../assets/home01.png">
            <p class="caption">
              巨杉（上海）资产管理有限公司成立于2014年，致力于专业的资产管理业务。巨杉资产以专业严谨的投资研究为基础，
              通过大量扎实调研消除不确定性，获取风险最小化的投资利润，为投资者带来持有稳定的回报。
            </p>
          </router-link>
        </li>
        <li class="col-md-4">
          <router-link to="/about/2" class="thumbnail">
            <h3 class="title">巨杉文化</h3>
            <img src="../assets/home02.png">
            <p class="caption">
              净值线就是我们的生命线。为客户创造价值，是巨杉资产的立足之本。巨杉资产聚焦于提升社会运作效率、改善人类生活质量、
              优化人与自然共存环境的公司，收获正能量利润，力争为客户创造持久稳定的回报，同时将投资生涯中的所得带到企业、社会中去，实现彼此的良性发展和共同成长。
            </p>
          </router-link>
        </li>
        <li class="col-md-4">
          <router-link to="/about/3" class="thumbnail">
            <h3 class="title">投资理念</h3>
            <img src="../assets/home03.png">
            <p class="caption">
              基金净值就是巨杉的生命线，我们致力于成为高速成长股“捕手”，力求投资在企业成长加速期的初期或者前半段，
              重点关注企业未来时间段的成长阶段和成长斜率，积极把握公司S曲线中具有成长力的部分。
            </p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="home-news">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="title">巨杉资讯</h2>
            <ul>
              <li>
                <router-link to="">· 潼骁投资：市场整体缓慢震荡上升<span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 白鹭资管：人民币贬值下，股市机会大于风险 <span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 雷根资产：人民币贬值是把双刃刀，PPP仍有投资机会  <span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 信普资产：二八行情有望延续 <span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 潼骁投资：市场整体缓慢震荡上升<span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 白鹭资管：人民币贬值下，股市机会大于风险 <span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 雷根资产：人民币贬值是把双刃刀，PPP仍有投资机会  <span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 信普资产：二八行情有望延续 <span class="pull-right">2017-10-31</span></router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <h2 class="title">市场动态</h2>
            <ul>
              <li>
                <router-link to="">· 潼骁投资：市场整体缓慢震荡上升<span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 白鹭资管：人民币贬值下，股市机会大于风险 <span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 雷根资产：人民币贬值是把双刃刀，PPP仍有投资机会  <span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 信普资产：二八行情有望延续 <span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 潼骁投资：市场整体缓慢震荡上升<span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 白鹭资管：人民币贬值下，股市机会大于风险 <span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 雷根资产：人民币贬值是把双刃刀，PPP仍有投资机会  <span class="pull-right">2017-10-31</span></router-link>
              </li>
              <li>
                <router-link to="">· 信普资产：二八行情有望延续 <span class="pull-right">2017-10-31</span></router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
  let VM
  import MainHeader from './common/MainHeader'
  import MainFooter from './common/MainFooter'
  import { siteConfig } from './common/base'
  export default {
    components: {MainHeader, MainFooter},
    mounted() {
      VM = this
      siteConfig.setTitle(siteConfig.nav[0])
    },
    data() {
      return {}
    }
  }
</script>
