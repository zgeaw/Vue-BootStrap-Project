/**
 * Created by 32237384@qq.com on 2017/11/1.
 */
export const siteConfig = {
  title: '巨杉资产',
  nav: ['首页', '关于巨杉', '巨杉视野', '产品服务', '客户服务', '联系我们', '注册', '登录'],
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

