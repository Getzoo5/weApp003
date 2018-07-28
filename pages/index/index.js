'use strict';
var data = require('../../utils/data.js')
var sliderWidth = 35; // 需要设置slider的宽度，用于计算中间位置

const app = getApp()
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    isFollow: true,
    capsuleTop: 70,
    tabs: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    sliderWidth: sliderWidth,

    item: []
  },
  onShow() {
  },
  onLoad(options) {
    var that = this
    this.setData({ navtopHeight: app.globalData.navtopHeight + 10, capsuleTop: app.globalData.navtopHeight - 60 })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex + 8
        })
      }
    })
    var mydata = data.sayHello(0)
    this.setData({ item: mydata })
  },
  capsuleActive(e) {
    if (e.currentTarget.dataset.id - 0)
    this.setData({ isFollow: false })
    else
    this.setData({ isFollow: true })
  },
  tabClick(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});