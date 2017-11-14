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
          <PersonalMenu/>
          <section class="col-md-10 pl0">
            <h3 class="details-title"><span v-text="columnTitle"></span><em></em></h3>
            <div class="feedback">
              <div class="form-horizontal">
                <div class="form-group">
                  <div class="col-sm-offset-1 col-sm-10">
                    <p class="gary">请在此处留下您的意见和建议，谢谢。</p>
                    <textarea class="form-control" rows="8"
                              v-model="message"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-1 col-sm-10 text-right">
                    <div class="row">
                      <div class="col-sm-offset-6 col-sm-3">
                        <button type="button" class="btn btn-gary btn-block" @click="cancel">取消</button>
                      </div>
                      <div class="col-sm-3">
                        <button type="submit" class="btn btn-warning btn-block" disabled v-if="!btnState">确定</button>
                        <button type="submit" class="btn btn-warning btn-block" v-else>确定</button>
                      </div>
                    </div>
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
        columnTitle: '投诉反馈',
        message: '',
        btnState: false
      }
    },
    watch: {
      message(Value) {
        VM.validate()
      }
    },
    methods: {
      validate() {
        if (VM.message) {
          VM.btnState = true
        } else {
          VM.btnState = false
        }
      },
      cancel() {
        VM.message = ''
        VM.btnState = false
      }
    }
  }
</script>
