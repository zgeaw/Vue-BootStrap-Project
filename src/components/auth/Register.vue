<template>
  <div class="main">
    <MainHeader/>
    <div class="container">
      <div class="reg">
        <section class="reg-tabs">
          <router-link to="/auth/reg/1" @click.native="setTab(1)">个人投资者</router-link>
          <router-link to="/auth/reg/2" @click.native="setTab(2)">机构投资者</router-link>
          <router-link to="/auth/reg/3" @click.native="setTab(3)">产品投资者</router-link>
        </section>
        <div class="form-horizontal">
          <div class="form-group" v-if="regType == 1">
            <label class="col-sm-3 control-label"><span class="required">*</span> 客户名称</label>
            <div class="col-sm-5">
              <input type="text" class="form-control">
            </div>
          </div>

          <div class="form-group" v-if="regType == 2">
            <label class="col-sm-3 control-label"><span class="required">*</span> 机构名称</label>
            <div class="col-sm-5">
              <input type="text" class="form-control">
            </div>
          </div>
          <template v-if="regType == 3">
            <div class="form-group">
              <label class="col-sm-3 control-label"><span class="required">*</span> 产品名称</label>
              <div class="col-sm-5">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label"><span class="required">*</span> 基金代码</label>
              <div class="col-sm-5">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label"><span class="required">*</span> 备案机构</label>
              <div class="col-sm-5">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label"><span class="required">*</span> 备案编号</label>
              <div class="col-sm-5">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label"><span class="required">*</span> 类型</label>
              <div class="col-sm-5">
                <select class="form-control">
                  <option>证券投资基金</option>
                  <option>股权投资基金</option>
                  <option>其他</option>
                </select>
              </div>
            </div>
          </template>

          <template v-if="regType != 1">
            <div class="form-group">
              <label class="col-sm-3 control-label"><span class="required">*</span> 证件类型</label>
              <div class="col-sm-5">
                <select class="form-control">
                  <option>营业执照</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label"><span class="required">*</span> 证件号码</label>
              <div class="col-sm-5">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label"><span class="required">*</span> 授权经办人</label>
              <div class="col-sm-5">
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label"><span class="required">*</span> 公司职务</label>
              <div class="col-sm-5">
                <input type="text" class="form-control">
              </div>
            </div>
          </template>

          <div class="form-group">
            <label class="col-sm-3 control-label"><span class="required">*</span> 手机</label>
            <div class="col-sm-5">
              <input type="text" class="form-control" v-model="tel">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label"><span class="required">*</span> 证件类型</label>
            <div class="col-sm-5">
              <select class="form-control">
                <option>身份证</option>
                <option>中国护照</option>
                <option>户口本</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label"><span class="required">*</span> 证件号码</label>
            <div class="col-sm-5">
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="form-group" v-if="regType == 1">
            <label class="col-sm-3 control-label"><span class="required">*</span> 国籍</label>
            <div class="col-sm-5">
              <input type="text" class="form-control" value="中国">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">性别</label>
            <div class="col-sm-5">
              <select class="form-control">
                <option>男</option>
                <option>女</option>
                <option>保密</option>
              </select>
            </div>
          </div>
          <div class="form-group" v-if="regType == 1">
            <label class="col-sm-3 control-label">生日</label>
            <div class="col-sm-5">
              <div class="input-group" @click="openByDrop($event)">
                <input type="text" class="form-control" v-model="birthday.value">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-calendar"></span>
                </span>
              </div>
              <div class="inputCalendar">
                <transition name="fade">
                  <div class="calendar-dropdown" v-if="birthday.show">
                    <calendar @select="birthday.select"></calendar>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div class="form-group" v-if="regType != 1">
            <label class="col-sm-3 control-label">固定电话</label>
            <div class="col-sm-5">
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">电子邮箱</label>
            <div class="col-sm-5">
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label">联系地址</label>
            <div class="col-sm-5">
              <input type="text" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label"><span class="required">*</span> 密码</label>
            <div class="col-sm-5">
              <input type="password" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label"><span class="required">*</span> 确认密码</label>
            <div class="col-sm-5">
              <input type="password" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label"><span class="required">*</span> 短信验证码</label>
            <div class="col-sm-3">
              <input type="text" class="form-control">
            </div>
            <div class="col-sm-2 pl0">
              <CodeCount :value="tel" :callBack="getCode"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label"><span class="required">*</span> 图形验证码</label>
            <div class="col-sm-3">
              <input type="text" class="form-control">
            </div>
            <div class="col-sm-6 pl0">
              <img src="../../assets/ewm.jpg" class="codeImg"/>
              <router-link to="">看不清，换一张</router-link>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label"></label>
            <div class="col-sm-9">
              <div class="checkbox">
                <label>
                  <input type="checkbox"> 本人已阅读并同意签署
                </label>
                <a href="" data-toggle="modal" data-target="#ModalBox" @click="setModalBox('合格投资者承诺书', boxInvestors)">《合格投资者承诺书》</a>
                <a href="" data-toggle="modal" data-target="#ModalBox" @click="setModalBox('风险揭示书', boxRisk)">《风险揭示书》</a>
                <a href="" data-toggle="modal" data-target="#ModalBox" @click="setModalBox('注册服务协议', boxProtocol)">《注册服务协议》</a>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-5">
              <button type="submit" class="btn btn-warning btn-block">注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MainFooter/>
    <ModalBox :title="boxTitle" :con="boxCon"/>
  </div>
</template>
<script>
  let VM
  import MainHeader from '../common/MainHeader'
  import MainFooter from '../common/MainFooter'
  import calendar from '../common/calendar/Index'
  import CodeCount from './CodeCount'
  import {siteConfig, arcAlert, showCalendar} from '../common/base'
  import ModalBox from '../common/ModalBox'
  import {Investors, Risk, Protocol} from './Agreement'
  export default {
    components: {MainHeader, MainFooter, calendar, CodeCount, ModalBox},
    mounted() {
      VM = this
      siteConfig.setTitle(siteConfig.nav[6])
    },
    data() {
      return {
        regType: parseInt(this.$route.params.type),
        birthday: {
          show: false,
          value: '',
          select: (val) => {
            VM.birthday.show = false
            VM.birthday.value = val.join("-")
          }
        },
        tel: '',
        boxTitle: '合格投资者承诺书',
        boxCon: Investors,
        boxInvestors: Investors,
        boxRisk: Risk,
        boxProtocol: Protocol
      }
    },
    methods: {
      setTab(Val){//选项卡事件
        VM.regType = Val
      },
      getCode() {
        arcAlert('验证码已发送！')
      },
      openByDrop(e){
        showCalendar(e, (value) => VM.birthday.show = value)
      },
      setModalBox(Title, Con) {
        VM.boxTitle = Title
        VM.boxCon = Con
      }
    }
  }
</script>
