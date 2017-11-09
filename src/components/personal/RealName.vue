<template>
  <div class="main">
    <MainHeader main nav active="Personal"/>
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
          <section class="col-md-12">
            <h3 class="details-title"><span v-text="columnTitle"></span><em></em></h3>
            <div class="authentication">

              <div class="tit">客户信息</div>
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-2 control-label">客户名称：</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">手机号：</label>
                  <div class="col-sm-4">13987898987</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">证件类型：</label>
                  <div class="col-sm-4">
                    <select class="form-control">
                      <option>身份证</option>
                      <option>中国护照</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">证件号码：</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">年龄：</label>
                  <div class="col-sm-4">32</div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">证件有效期：</label>
                  <div class="col-sm-3">
                    <div class="input-group" @click="showStartTime">
                      <input type="text" class="form-control" v-model="startTime.value">
                      <span class="input-group-addon">
                        <i class="glyphicon glyphicon-calendar"></i>
                      </span>
                    </div>
                    <div class="inputCalendar">
                      <transition name="fade">
                        <div class="calendar-dropdown" v-if="startTime.show">
                          <calendar @select="startTime.select"></calendar>
                        </div>
                      </transition>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="input-group" @click="showEndTime">
                      <input type="text" class="form-control" v-model="endTime.value">
                      <span class="input-group-addon">
                        <i class="glyphicon glyphicon-calendar"></i>
                      </span>
                    </div>
                    <div class="inputCalendar">
                      <transition name="fade">
                        <div class="calendar-dropdown" v-if="endTime.show">
                          <calendar @select="endTime.select"></calendar>
                        </div>
                      </transition>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">银行卡号：</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control"/>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">联系地址：</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control"/>
                  </div>
                </div>
              </div>

              <div class="tit">附件</div>
              <UpLoad/>

              <div class="text-center">
                <div class="row">
                  <div class="col-md-2 col-md-offset-4">
                    <router-link to="/personal" class="btn btn-gary btn-block">取消</router-link>
                  </div>
                  <div class="col-md-2">
                    <button type="button" class="btn btn-warning btn-block">提交</button>
                  </div>
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
  import {siteConfig, showCalendar} from '../common/base'
  import UpLoad from '../common/UpLoad'
  import calendar from '../common/calendar/Index'
  export default {
    components: {MainHeader, MainFooter, UpLoad, calendar},
    mounted() {
      VM = this
      siteConfig.setTitle(siteConfig.nav[9])
    },
    data() {
      return {
        columnTitle: siteConfig.nav[9],
        startTime: {
          show: false,
          value: '',
          select: (val) => {
            VM.startTime.show = false
            VM.startTime.value = val.join("-")
          }
        },
        endTime: {
          show: false,
          value: '',
          select: (val) => {
            VM.endTime.show = false
            VM.endTime.value = val.join("-")
          }
        }
      }
    },
    methods: {
      showStartTime(e) {
        showCalendar(e, (value) => VM.startTime.show = value)
      },
      showEndTime(e) {
        showCalendar(e, (value) => VM.endTime.show = value)
      }
    }
  }
</script>
