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

              <div class="tit">实名信息</div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-2 control-label">客户名称：</label>
                  <div class="col-sm-10">张三</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">手机号：</label>
                  <div class="col-sm-10">13987898987</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">年龄：</label>
                  <div class="col-sm-10">18</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">证件类型：</label>
                  <div class="col-sm-10">身份证</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">证件号码：</label>
                  <div class="col-sm-10">410303111122223333</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">电子邮件：</label>
                  <div class="col-sm-10">admin@qq.com</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">证件有效期：</label>
                  <div class="col-sm-6">2014-03-24~2024-03-23</div>
                  <div class="col-sm-4 text-right">
                    <router-link to="/personal/realName" class="btn btn-warning btn-sm">点击认证</router-link>
                  </div>
                </div>
                <div class="line"></div>
              </div>

              <div class="tit">风测信息</div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-2 control-label">客户名称：</label>
                  <div class="col-sm-10">张三</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">风险等级：</label>
                  <div class="col-sm-6">R4  成长型</div>
                  <div class="col-sm-4 text-right">
                    <router-link to="/personal/riskEvaluation" class="btn btn-warning btn-sm">重新测试</router-link>
                  </div>
                </div>
                <div class="line"></div>
              </div>

              <div class="tit">资产证明信息</div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-2 control-label">客户名称：</label>
                  <div class="col-sm-10">张三</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">认证资产（元）：</label>
                  <div class="col-sm-6">456,789,456,132.00</div>
                  <div class="col-sm-4 text-right">
                    <router-link to="/personal/assets" class="btn btn-warning btn-sm">重新认证</router-link>
                  </div>
                </div>
                <div class="line"></div>
              </div>

              <div class="tit">合格投资者</div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-2 control-label">验证状态：</label>
                  <div class="col-sm-10">未验证</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">实名信息：</label>
                  <div class="col-sm-10"><span class="gary">已验证</span></div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">风测信息：</label>
                  <div class="col-sm-10">未验证<router-link to="/personal/riskEvaluation" class="btn btn-warning btn-sm">点击认证</router-link></div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">资产证明：</label>
                  <div class="col-sm-10">未验证<router-link to="/personal/assets" class="btn btn-warning btn-sm">点击认证</router-link></div>
                </div>
              </div>

              <div class="tit">投资者类型</div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-2 control-label">类型：</label>
                  <div class="col-sm-10">普通投资者</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">实名信息：</label>
                  <div class="col-sm-10"><span class="gary">已验证</span></div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">风测信息：</label>
                  <div class="col-sm-10">未验证<router-link to="/personal/riskEvaluation" class="btn btn-warning btn-sm">点击认证</router-link></div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">资产证明：</label>
                  <div class="col-sm-10">未验证<router-link to="/personal/assets" class="btn btn-warning btn-sm">点击认证</router-link></div>
                </div>
                <div class="form-group">
                  <label class="col-sm-4 control-label">账户类申请表投资经历转换申请表：</label>
                  <div class="col-sm-6">未验证<router-link to="/personal/professional" class="btn btn-warning btn-sm">点击认证</router-link></div>
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
  import PersonalMenu from './PersonalMenu'
  export default {
    components: {MainHeader, MainFooter, PersonalMenu},
    mounted() {
      VM = this
      siteConfig.setTitle(siteConfig.nav[4])
    },
    data() {
      return {
        columnTitle: '个人中心'
      }
    },
    methods: {}
  }
</script>
