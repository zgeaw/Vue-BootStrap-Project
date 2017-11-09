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
          <section class="col-md-2">
            <h4>产品服务</h4>
            <ul class="left-nav">
              <li :class="{'router-link-active': (aboutType == 1)}">
                <router-link to="/product/1">· 产品列表</router-link>
              </li>
            </ul>
          </section>
          <section class="col-md-10 pl0">
            <h3 class="details-title"><span v-text="columnTitle"></span><em></em></h3>
            <template v-if="aboutType == 1">
              <ul class="product-list">
                <li>
                  <div class="media">
                    <div class="media-body">
                      <div class="media-heading">
                        <router-link to="/productDetails/0">朝阳永续对冲混合私募指数FOF</router-link>
                        <span class="label label-default">存续中</span>
                      </div>
                      <div class="row worth">
                        <div class="col-md-4">最新净值：合格投资者可见</div>
                        <div class="col-md-4 text-center">累计净值：合格投资者可见</div>
                        <div class="col-md-4 text-right">最新净值日期：合格投资者可见</div>
                      </div>
                      <div class="row data">
                        <div class="col-md-3">成立日期：2017-11-10</div>
                        <div class="col-md-3 text-center">个人认购起点：100万</div>
                        <div class="col-md-3 text-center">机构认购起点：100万</div>
                        <div class="col-md-3 text-right">投资经理：廖冰</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media">
                    <div class="media-body">
                      <div class="media-heading">
                        <router-link to="/productDetails/1">朝阳永续对冲混合私募指数FOF</router-link>
                        <span class="label label-default">存续中</span>
                      </div>
                      <div class="row worth">
                        <div class="col-md-4">最新净值：合格投资者可见</div>
                        <div class="col-md-4 text-center">累计净值：合格投资者可见</div>
                        <div class="col-md-4 text-right">最新净值日期：合格投资者可见</div>
                      </div>
                      <div class="row data">
                        <div class="col-md-3">成立日期：2017-11-10</div>
                        <div class="col-md-3 text-center">个人认购起点：100万</div>
                        <div class="col-md-3 text-center">机构认购起点：100万</div>
                        <div class="col-md-3 text-right">投资经理：廖冰</div>
                      </div>
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
            </template>
          </section>
        </div>
      </div>
    </div>
    <MainFooter/>
    <div class="modal fade" tabindex="-1" id="productAlert">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title text-center">提示信息</h4>
          </div>
          <div class="modal-body text-center">
            <div class="content">您还没完成登录，请优先登录！</div>
            <div class="row">
              <div class="col-sm-6">
                <button type="button" class="btn btn-gary btn-block" data-dismiss="modal" aria-label="Close">取消</button>
              </div>
              <div class="col-sm-6">
                <router-link to="/auth" class="btn btn-warning btn-block" data-dismiss="modal" aria-label="Close">登录</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      siteConfig.setTitle(siteConfig.nav[3])
      $('#productAlert').modal('show')
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
        columnTitle: '产品列表'
      }
    },
    methods: {
      modalHide() {
        $('#productAlert').modal('hide')
      }
    }
  }
</script>
<style scoped lang="less">
  .modal-dialog{
    .modal-title{ font-size: 24px;}
    .modal-body{
      padding: 0 40px; height: 233px;
      .content{ color: #666; height: 150px; line-height: 150px;}
    }
  }
  @media (min-width: 768px){
    .modal-dialog {width: 450px;  top: 50%; margin-top: -150px;}
  }
</style>
