'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App({
  config: {
    apiBase: 'https://douban.uieee.com'
  },
  globalData: {
    closeTabBar: false,
    navtopHeight: null,           // 顶部胶囊区高度
    navtopSystem: null,           // 顶部系统区高度
    height: null,           // 页面高度
  },
  onLaunch: function onLaunch() {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.globalData.navtopSystem = res.statusBarHeight
        if (res.model == 'iPhone 6' || res.model == 'iPhone 6s' || res.model == 'iPhone 5s' || res.model == 'iPhone 7' || res.model == 'iPhone 7s') {
          that.globalData.navtopHeight = 112
        } else if (res.model == 'iPhone X') {
          that.globalData.navtopHeight = 160
        } else {
          that.globalData.navtopHeight = 134
        }
        that.globalData.height = res.windowHeight * 2
      }
    })
  }
});