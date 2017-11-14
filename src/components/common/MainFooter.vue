<template>
  <footer class="mainFooter" :class="{'footer-fixed': fixed}">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <router-link to="/" class="logo"><img src="../../assets/logoWhite.png"></router-link>
          <p class="inline copy">
            2017 &copy; 巨杉（上海）资产管理有限公司版权所有<br>
            地址：上海市浦东新区芳甸路1155号浦东嘉里城2201室<br>
            邮编：201204 沪ICP备14017100号
          </p>
        </div>
        <div class="col-md-4 text-right">
          <p class="footer-link">图片使用如有侵权请联系我们，我们会在24小时内删除。</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    props: {
      fixed: {
        type: Boolean
      }
    }
  }
</script>
