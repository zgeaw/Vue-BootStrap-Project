/**
 * Created by 32237384@qq.com on 2017/11/1.
 */
export const siteConfig = {
  title: '巨杉资产',
  nav: ['首页', '关于巨杉', '巨杉视野', '产品服务', '客户服务', '联系我们', '注册', '登录', '找回密码', '实名认证', '资产证明', '普通转专业', '风险评测'],
  setTitle: (Title) => {//设置页面<title> 内容
    document.title = Title + ' - ' + siteConfig.title
  }
}

//获取高度
export const getHeight = (Height) => {
  let windowHeight = window.innerHeight
  return windowHeight - Height
}

//头部底部高度之和
export const getHeaderFooterHeight = 226

//监听窗口大小改变事件
export const windowOnresize = (callBack) => {
  window.onresize = function () {
    callBack()
  }
}

//格式日期
export const formatDate = (Value) => {
  if (Value) {
    return Value.substring(0, 10);
  }
  return "";
}

//Alert提示框
export const arcAlert = (Con, Title) => {
  let _html = `<div class="modal fade arcAlert" tabindex="-1">
    <div class="modal-dialog modal-sm">
    <div class="modal-content">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">${Title || '提示'}</h4>
      </div>
      <div class="modal-body">${Con || ''}</div>
</div>
    </div>
  </div>`
  $('.arcAlert').remove()
  $('body').append(_html)
  $('.arcAlert').modal('show')
}

//选择时间
export const showCalendar = (e, CallBack) => {
  CallBack(true)
  e.stopPropagation()
  window.setTimeout(() => {
    document.addEventListener("click", () => {
      CallBack(false)
      document.removeEventListener("click", () => {
      }, false);
    }, false);
  }, 1000)
}

// 百度分享
export const bdshare = function () {
  //window.location.reload()
  if(location.href.indexOf('#')==-1){
    location.href=location.href+"#";
    location.reload();
  }
  setTimeout(function () {
    let sel = $('script[title="bdShare"]')
    if (sel.length == 0) {
      window._bd_share_config = {
        "common": {
          "bdSnsKey": {},
          "bdText": "",
          "bdMini": "2",
          "bdPic": "",
          "bdStyle": "0",
          "bdSize": "16"
        }, "share": {}
      }
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.title = 'bdShare'
      s.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)
      document.body.appendChild(s)
    }
  }, 100)
}
