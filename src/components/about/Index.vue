<template>
  <div class="main">
    <MainHeader main nav active="About"/>
    <div class="banner-ny"></div>
    <div class="container">
      <ol class="breadcrumb">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/about/1">关于巨杉</router-link>
        </li>
        <li class="active" v-text="columnTitle"></li>
      </ol>
      <div class="bgWhite about">
        <div class="row">
          <section class="col-md-2">
            <ul class="left-nav">
              <li :class="{'router-link-active': (aboutType == 1)}">
                <router-link to="/about/1">· 公司简介</router-link>
              </li>
              <li :class="{'router-link-active': (aboutType == 2)}">
                <router-link to="/about/2">· 巨杉文化</router-link>
              </li>
              <li :class="{'router-link-active': (aboutType == 3)}">
                <router-link to="/about/3">· 投资理念</router-link>
              </li>
              <li :class="{'router-link-active': (aboutType == 4)}">
                <router-link to="/about/4">· 投研团队</router-link>
              </li>
              <li :class="{'router-link-active': (aboutType == 5)}">
                <router-link to="/about/5">· 招贤纳士</router-link>
              </li>
            </ul>
          </section>
          <section class="col-md-10 pl0">
            <h3 class="details-title"><span v-text="columnTitle"></span><em></em></h3>
            <template v-if="aboutType == 1">
              <img src="../../assets/about_01.png" class="img-responsive">
              <div class="details">
                <p>
                  巨杉（上海）资产管理有限公司成立于2014年，致力于专业的资产管理业务。巨杉资产以专业严谨的投资研究为基础，
                  通过大量扎实调研消除不确定性，获取风险最小化的投资利润，为投资者带来持有稳定的回报。
                </p>
                <p>
                  巨杉投研团队由多名资深基金投研人员构成，团队研究行业覆盖国民经济各主要行业全产业链。基金主要管理人从业十余年，
                  拥有百亿资金管理经验，历经完整的牛熊市转换，近五年A股业绩名列前茅，为海内外众多高净值客户管理资产。
                </p>
              </div>
            </template>
            <template v-if="aboutType == 2">
              <img src="../../assets/about_02.png" class="img-responsive">
              <div class="details">
                <p>
                  净值线就是我们的生命线。为客户创造价值，是巨杉资产的立足之本。巨杉资产聚焦于提升社会运作效率、
                  改善人类生活质量、优化人与自然共存环境的公司，收获正能量利润，力争为客户创造持久稳定的回报，
                  同时将投资生涯中的所得带到企业、社会中去，实现彼此的良性发展和共同成长。
                </p>
              </div>
            </template>
            <template v-if="aboutType == 3">
              <img src="../../assets/about_03.png" class="img-responsive">
              <div class="details">
                <p>
                  基金净值就是巨杉的生命线，我们致力于成为高速成长股“捕手”，力求投资在企业成长加速期的初期或者前半段，
                  重点关注企业未来时间段的成长阶段和成长斜率，积极把握公司S曲线中具有成长力的部分。
                </p>
              </div>
            </template>
            <template v-if="aboutType == 4">
              <img src="../../assets/about_04.png" class="img-responsive">
              <div class="details">
                <p>
                  巨杉（上海）资产管理有限公司成立于2014年，致力于专业的资产管理业务。巨杉资产以专业严谨的投资研究为基础，
                  通过大量扎实调研消除不确定性，获取风险最小化的投资利润，为投资者带来持有稳定的回报。
                </p>
                <p>
                  巨杉投研团队由多名资深基金投研人员构成，团队研究行业覆盖国民经济各主要行业全产业链。基金主要管理人从业十余年，
                  拥有百亿资金管理经验，历经完整的牛熊市转换，近五年A股业绩名列前茅，为海内外众多高净值客户管理资产。
                </p>
              </div>
            </template>
            <template v-if="aboutType == 5">
              <img src="../../assets/about_05.png" class="img-responsive">
              <div class="details">
                <h3>岗位职责：</h3>
                1、收集整理国内外经济发展相关信息；<br>
                2、参与公司调研、撰写调研报告；<br>
                3、保持对相关行业及公司的持续跟踪（港股为主）；<br>
                4、完成公司其他相关任务。<br><br>

                <h3>任职要求：</h3>
                1、专业不限，本科及以上学历；<br>
                2、从事分析工作3-4年，对港股有深入研究；<br>
                3、具有较强信息收集、归纳总结能力，能够熟练使用word、excel以及其他办公应用软件；<br>
                4、热爱研究，具有高度进取精神、团队合作和服务意识。<br><br><br>

                简历请发送至：hr@grasset.com.cn
              </div>
            </template>
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
  import { siteConfig } from '../common/base'
  export default {
    components: {MainHeader, MainFooter},
    mounted() {
      VM = this
      VM.setAboutTitle(VM.aboutType)
      siteConfig.setTitle(siteConfig.nav[1])
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
        columnTitle: '公司简介'
      }
    },
    methods: {
      setAboutTitle (Value) {
        if (Value == 2) {
          VM.columnTitle = '巨杉文化'
        } else if (Value == 3) {
          VM.columnTitle = '投资理念'
        } else if (Value == 4) {
          VM.columnTitle = '投研团队'
        } else if (Value == 5) {
          VM.columnTitle = '招贤纳士'
        } else {
          VM.columnTitle = '公司简介'
        }
      }
    }
  }
</script>
