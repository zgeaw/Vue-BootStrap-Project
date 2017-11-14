<template>
  <div class="main">
    <MainHeader main nav active="Personal"/>
    <div class="banner-ny"></div>
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
          <PersonalMenu />
          <section class="col-md-10 pl0">
            <h3 class="details-title"><span v-text="columnTitle"></span><em></em></h3>
            <div class="personal">

              <div class="myproduct-tab">
                <router-link to="/myProduct/1">已持有</router-link>
                <router-link to="/myProduct/2">处理中</router-link>
                <router-link to="/myProduct/3">已赎回</router-link>
              </div>

              <ul class="product-details">
                <li>
                  <div class="media-heading">
                    <router-link to="/productDetails/0">朝阳永续对冲混合私募指数FOF</router-link>
                    <span class="gary">交易时间：</span>
                    <span>2017-11-10</span>
                  </div>
                  <div class="table">
                    <table>
                      <thead>
                      <th>持有份额</th>
                      <th>最新净值/买入净值</th>
                      <th>当前资产总额/交易合同总额</th>
                      <th>合同编号/交易编号</th>
                      <th>受益账户</th>
                      </thead>
                      <tbody>
                      <tr>
                        <td>5,164,231</td>
                        <td>
                          <p>
                            <span class="red">1.05</span><br>
                            1.02
                          </p>
                        </td>
                        <td>
                          <p>
                            5,689,423<br>
                            5,689,423
                          </p>
                        </td>
                        <td>
                          <p>
                            5,689,423<br>
                            5,689,423
                          </p>
                        </td>
                        <td>
                          <p>
                            上海工商银行<br>
                            66666，6666
                          </p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li>
                  <div class="media-heading">
                    <router-link to="/productDetails/0">朝阳永续对冲混合私募指数FOF</router-link>
                    <span class="gary">交易时间：</span>
                    <span>2017-11-10</span>
                  </div>
                  <div class="table">
                    <table>
                      <thead>
                      <th>持有份额</th>
                      <th>最新净值/买入净值</th>
                      <th>当前资产总额/交易合同总额</th>
                      <th>合同编号/交易编号</th>
                      <th>受益账户</th>
                      </thead>
                      <tbody>
                      <tr>
                        <td>5,164,231</td>
                        <td>
                          <p>
                            <span class="red">1.05</span><br>
                            1.02
                          </p>
                        </td>
                        <td>
                          <p>
                            5,689,423<br>
                            5,689,423
                          </p>
                        </td>
                        <td>
                          <p>
                            5,689,423<br>
                            5,689,423
                          </p>
                        </td>
                        <td>
                          <p>
                            上海工商银行<br>
                            66666，6666
                          </p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li>
                  <div class="media-heading">
                    <router-link to="/productDetails/0">朝阳永续对冲混合私募指数FOF</router-link>
                    <span class="gary">交易时间：</span>
                    <span>2017-11-10</span>
                  </div>
                  <div class="table">
                    <table>
                      <thead>
                      <th>持有份额</th>
                      <th>最新净值/买入净值</th>
                      <th>当前资产总额/交易合同总额</th>
                      <th>合同编号/交易编号</th>
                      <th>受益账户</th>
                      </thead>
                      <tbody>
                      <tr>
                        <td>5,164,231</td>
                        <td>
                          <p>
                            <span class="red">1.05</span><br>
                            1.02
                          </p>
                        </td>
                        <td>
                          <p>
                            5,689,423<br>
                            5,689,423
                          </p>
                        </td>
                        <td>
                          <p>
                            5,689,423<br>
                            5,689,423
                          </p>
                        </td>
                        <td>
                          <p>
                            上海工商银行<br>
                            66666，6666
                          </p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
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
  import PersonalMenu from './PersonalMenu'
  export default {
    components: {MainHeader, MainFooter, PersonalMenu},
    mounted() {
      VM = this
      siteConfig.setTitle(siteConfig.nav[4])
    },
    watch: {
      "$route": function (Route) {//监听路由变化
        VM.aboutType = Route.params.type
      }
    },
    data() {
      return {
        aboutType: parseInt(this.$route.params.type),
        columnTitle: '我的产品'
      }
    },
    methods: {}
  }
</script>
