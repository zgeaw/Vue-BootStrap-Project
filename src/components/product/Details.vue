<template>
  <div class="main">
    <MainHeader main nav active="Product"/>
    <div class="banner-ny"></div>
    <div class="container">
      <ol class="breadcrumb">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/product/1">产品服务</router-link>
        </li>
        <li class="active" v-text="columnTitle"></li>
      </ol>
      <div class="bgWhite product">
        <div class="row">
          <section class="col-md-12">
            <div class="product-details">
              <div class="media">
                <div class="media-body">
                  <div class="media-heading">
                    <h3 class="title">朝阳永续对冲混合私募指数FOF</h3>
                    <span class="label label-default">投资策略</span>
                    <span class="label label-default">存续中</span>
                    <button type="button" class="btn btn-warning pull-right">产品预约</button>
                  </div>
                  <div class="row worth">
                    <div class="col-md-2">最新净值：<span class="red">0.9426</span></div>
                    <div class="col-md-2">累计净值：<span class="red">0.9987</span></div>
                    <div class="col-md-2">成立日期：<span>2017-11-01</span></div>
                    <div class="col-md-2">发行机构： <span>—</span></div>
                  </div>
                  <div class="row data">
                    <div class="col-md-2">净值日期：<span>2017-11-10</span></div>
                    <div class="col-md-2">投资顾问：<span>上海向日葵</span></div>
                    <div class="col-md-2">基金经理：<span>廖冰</span></div>
                    <div class="col-md-2">个人认购起点：<span>100万</span></div>
                    <div class="col-md-2">机构认购起点：<span>1000万</span></div>
                  </div>
                </div>
              </div>
              <div class="line"></div>

              <div class="tit">产品表现</div>
              <div class="row">
                <div class="col-md-7">
                  <div class="tit2">朝阳永续对冲混合私募指数FOF收益走势图</div>
                  <div class="row hChart">
                    <div class="col-md-8 text-center">
                      <button type="button" class="btn btn-info btn-sm" :class="{active: (highChartBtn == 1)}" @click="changChart(1)">1个月</button>
                      <button type="button" class="btn btn-info btn-sm" :class="{active: (highChartBtn == 2)}" @click="changChart(2)">2个月</button>
                      <button type="button" class="btn btn-info btn-sm" :class="{active: (highChartBtn == 3)}" @click="changChart(3)">1年</button>
                      <button type="button" class="btn btn-info btn-sm" :class="{active: (highChartBtn == 4)}" @click="changChart(4)">今年以来</button>
                    </div>
                    <div class="col-md-4 text-right">最近1年涨幅<span class="orange rose">43.95%</span></div>
                  </div>
                  <HighChart :type="highChart.chartType" :datas="highChart.chartDatas"/>
                </div>
                <div class="col-md-5">
                  <div class="tit2">历史净值</div>
                  <div class="details-table">
                    <table class="table">
                      <thead>
                        <th>净值日期</th>
                        <th>单位净值</th>
                        <th>累计净值</th>
                        <th>涨跌幅</th>
                      </thead>
                      <tbody>
                      <tr>
                        <td>2017-11-01</td>
                        <td>0.9426</td>
                        <td>0.9425</td>
                        <td><span class="green">-0.34%</span></td>
                      </tr>
                      <tr>
                        <td>2017-11-01</td>
                        <td>0.9426</td>
                        <td>0.9425</td>
                        <td><span class="red">0.34%</span></td>
                      </tr>
                      <tr>
                        <td>2017-11-01</td>
                        <td>0.9426</td>
                        <td>0.9425</td>
                        <td><span class="green">-0.34%</span></td>
                      </tr>
                      <tr>
                        <td>2017-11-01</td>
                        <td>0.9426</td>
                        <td>0.9425</td>
                        <td><span class="red">0.34%</span></td>
                      </tr>
                      <tr>
                        <td>2017-11-01</td>
                        <td>0.9426</td>
                        <td>0.9425</td>
                        <td><span class="green">-0.34%</span></td>
                      </tr>
                      <tr>
                        <td>2017-11-01</td>
                        <td>0.9426</td>
                        <td>0.9425</td>
                        <td><span class="red">0.34%</span></td>
                      </tr>
                      <tr>
                        <td>2017-11-01</td>
                        <td>0.9426</td>
                        <td>0.9425</td>
                        <td><span class="green">-0.34%</span></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="tit">产品详情</div>
              <table class="table2">
                <tbody>
                <tr>
                  <td colspan="4" class="notable">基本信息</td>
                </tr>
                <tr>
                  <th class="th">基金全称</th>
                  <td>朝阳永续A期基金</td>
                  <th class="th">基金类型</th>
                  <td>组合基金</td>
                </tr>
                <tr>
                  <th>成立时间</th>
                  <td>2017-11-01</td>
                  <th>组织形式</th>
                  <td>私募证券投资基金</td>
                </tr>
                <tr>
                  <th>初始发行规模</th>
                  <td>8000万元</td>
                  <th>托管机构</th>
                  <td>招商证券（总）</td>
                </tr>
                <tr>
                  <th>封闭期</th>
                  <td>6个月</td>
                  <th>净值披露频率</th>
                  <td>周</td>
                </tr>
                <tr>
                  <th>基金状态</th>
                  <td>存续中</td>
                  <th>备案编号</th>
                  <td>S7876</td>
                </tr>
                <tr>
                  <th>基金介绍</th>
                  <td colspan="3">--</td>
                </tr>
                <tr>
                  <td colspan="4" class="notable">认购须知</td>
                </tr>
                <tr>
                  <th>最低认缴金额</th>
                  <td colspan="3">100万</td>
                </tr>
                <tr>
                  <th>最低追加金额</th>
                  <td colspan="3">1万</td>
                </tr>
                <tr>
                  <th>证券经纪</th>
                  <td colspan="3">--</td>
                </tr>
                <tr>
                  <th>托管银行</th>
                  <td colspan="3">招商证券（总）</td>
                </tr>
                <tr>
                  <th>开放日</th>
                  <td colspan="3">存续中</td>
                </tr>
                <tr>
                  <th>认购费</th>
                  <td colspan="3">1.00%</td>
                </tr>
                <tr>
                  <th>银行托管费</th>
                  <td colspan="3">0.20%</td>
                </tr>
                <tr>
                  <th>信托管理费</th>
                  <td colspan="3">--</td>
                </tr>
                <tr>
                  <th>投资顾问业绩报酬</th>
                  <td colspan="3">--</td>
                </tr>
                <tr>
                  <th>赎回费</th>
                  <td colspan="3">0.00%</td>
                </tr>
                <tr>
                  <th>投资方向</th>
                  <td colspan="3">本基金定向投资于上海向日葵投资有限公司发行的“朝阳永续FOF1号基金”，闲置基金可投资于货币市场工具、银行理财产品、银行存款。</td>
                </tr>
                </tbody>
              </table>

              <div class="tit">产品报告</div>
              <div class="details-table">
                <table class="table">
                  <tbody>
                  <tr>
                    <td>
                      <router-link to="">朝阳永续对冲混合私募指数FOF周报</router-link>
                    </td>
                    <td><span class="date">2017-11-01</span></td>
                  </tr>
                  <tr>
                    <td>
                      <router-link to="">朝阳永续对冲混合私募指数FOF周报</router-link>
                    </td>
                    <td><span class="date">2017-11-01</span></td>
                  </tr>
                  <tr>
                    <td>
                      <router-link to="">朝阳永续对冲混合私募指数FOF周报</router-link>
                    </td>
                    <td><span class="date">2017-11-01</span></td>
                  </tr>
                  <tr>
                    <td>
                      <router-link to="">朝阳永续对冲混合私募指数FOF周报</router-link>
                    </td>
                    <td><span class="date">2017-11-01</span></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="text-center">
                <ul class="pagination">
                  <li>
                    <router-link to="" aria-label="Previous">
                      <span aria-hidden="true">首页</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="">上一页</router-link>
                  </li>
                  <li>
                    <router-link to="">1</router-link>
                  </li>
                  <li class="active">
                    <router-link to="">2</router-link>
                  </li>
                  <li>
                    <router-link to="">3</router-link>
                  </li>
                  <li>
                    <router-link to="">4</router-link>
                  </li>
                  <li>
                    <router-link to="">...</router-link>
                  </li>
                  <li>
                    <router-link to="">下一页</router-link>
                  </li>
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
  let dates = [
    {"netDate": "2017-10-09 00:00:00", "netValue": 1.1212},
    {"netDate": "2017-10-10 00:00:00", "netValue": 1.2123},
    {"netDate": "2017-10-12 00:00:00", "netValue": 1.2341},
    {"netDate": "2017-10-13 00:00:00", "netValue": 1.2289},
    {"netDate": "2017-11-01 00:00:00", "netValue": 9.8600},
    {"netDate": "2017-11-02 00:00:00", "netValue": 10.8500}
  ]
  import MainHeader from '../common/MainHeader'
  import MainFooter from '../common/MainFooter'
  import {siteConfig, formatDate} from '../common/base'
  import HighChart from '../common/hightCharts/HightChart'
  export default {
    components: {MainHeader, MainFooter, HighChart},
    mounted() {
      VM = this
      siteConfig.setTitle(siteConfig.nav[3])
      VM.queryNetValueChart()
    },
    data() {
      return {
        columnTitle: '产品详情',
        highChart: {
          chartType: [],
          chartDatas: [{
            name: '本基金',
            data: []
          }]
        },
        highChartBtn: 1
      }
    },
    methods: {
      queryNetValueChart () {
        let chartType = []
        let chartDatas = []
        dates.map((item) => {
          chartType.push(formatDate(item.netDate))
          chartDatas.push(item.netValue)
        })
        VM.highChart.chartType = chartType
        VM.highChart.chartDatas[0].data = chartDatas
      },
      changChart(Value) {
          VM.highChartBtn = Value
      }
    }
  }
</script>
