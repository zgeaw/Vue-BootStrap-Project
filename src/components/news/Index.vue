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
            <template v-if="aboutType == 1">
              <ul class="news-list">
                <li>
                  <div class="media">
                    <div class="media-body">
                      <router-link to="/newsDetails/1/1" class="media-heading">即将到来的商品“巨无霸” -原油期货专题报告</router-link>
                      <p class="desc">
                        上海期货交易所子公司上海国际能源交易中心于 2017 年 5 月 11 日晚间正式发布了《上海国际能源交易中心原油期货标准合约》。
                        该合约的发布标志着中国原油期货上市指日可待。上海期货交易所子公司上海国际能源交易中心于 2017 年 5 月 11 日晚间正式发布
                      </p>
                      <span class="date">日期：2017-10-10</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media">
                    <div class="media-body">
                      <router-link to="/newsDetails/1/1" class="media-heading">即将到来的商品“巨无霸” -原油期货专题报告</router-link>
                      <p class="desc">
                        上海期货交易所子公司上海国际能源交易中心于 2017 年 5 月 11 日晚间正式发布了《上海国际能源交易中心原油期货标准合约》。
                        该合约的发布标志着中国原油期货上市指日可待。上海期货交易所子公司上海国际能源交易中心于 2017 年 5 月 11 日晚间正式发布
                      </p>
                      <span class="date">日期：2017-10-10</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media">
                    <div class="media-body">
                      <router-link to="/newsDetails/1/1" class="media-heading">即将到来的商品“巨无霸” -原油期货专题报告</router-link>
                      <p class="desc">
                        上海期货交易所子公司上海国际能源交易中心于 2017 年 5 月 11 日晚间正式发布了《上海国际能源交易中心原油期货标准合约》。
                        该合约的发布标志着中国原油期货上市指日可待。上海期货交易所子公司上海国际能源交易中心于 2017 年 5 月 11 日晚间正式发布
                      </p>
                      <span class="date">日期：2017-10-10</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="text-center">
                <ul class="pagination">
                  <li>
                    <router-link to="" aria-label="Previous">
                      <span aria-hidden="true">首页</span>
                    </router-link>
                  </li>
                  <li><router-link to="">上一页</router-link></li>
                  <li><router-link to="">1</router-link></li>
                  <li class="active"><router-link to="">2</router-link></li>
                  <li><router-link to="">3</router-link></li>
                  <li><router-link to="">4</router-link></li>
                  <li><router-link to="">...</router-link></li>
                  <li><router-link to="">下一页</router-link></li>
                  <li>
                    <router-link to="" aria-label="Next">
                      <span aria-hidden="true">尾页</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </template>
            <template v-if="aboutType == 2">
              <ul class="news-list">
                <li>
                  <div class="media">
                    <div class="media-body">
                      <router-link to="/newsDetails/2/1" class="media-heading">即将到来的商品“巨无霸” -原油期货专题报告</router-link>
                      <p class="desc">
                        上海期货交易所子公司上海国际能源交易中心于 2017 年 5 月 11 日晚间正式发布了《上海国际能源交易中心原油期货标准合约》。
                        该合约的发布标志着中国原油期货上市指日可待。上海期货交易所子公司上海国际能源交易中心于 2017 年 5 月 11 日晚间正式发布
                      </p>
                      <span class="date">日期：2017-10-10</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="text-center">
                <ul class="pagination">
                  <li>
                    <router-link to="" aria-label="Previous">
                      <span aria-hidden="true">首页</span>
                    </router-link>
                  </li>
                  <li><router-link to="">上一页</router-link></li>
                  <li class="active"><router-link to="">1</router-link></li>
                  <li><router-link to="">2</router-link></li>
                  <li><router-link to="">下一页</router-link></li>
                  <li>
                    <router-link to="" aria-label="Next">
                      <span aria-hidden="true">尾页</span>
                    </router-link>
                  </li>
                </ul>
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
  import {siteConfig} from '../common/base'
  export default {
    components: {MainHeader, MainFooter},
    mounted() {
      VM = this
      VM.setAboutTitle(VM.aboutType)
      siteConfig.setTitle(siteConfig.nav[2])
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
