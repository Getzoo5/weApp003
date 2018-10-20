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
    tabs: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    sliderWidth: sliderWidth,
    capsuleSet: {
      border: '#43240F',
      innerText1: '关注',
      innerText2: '热门',
      backgroundColor: '#FCE33E',
      img: '/assets/icon/search.png'
    },

    items: [],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
  },
  onLoad(options) {
    var that = this
    this.setData({ activeIndex: new Date().getDay() })    // 保持当天选中状态
    this.setData({ navtopHeight: app.globalData.navtopHeight + 10, capsuleTop: app.globalData.navtopHeight - 60, height: app.globalData.height })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth*2,
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex + 8
        })
      }
    })
    var mydata = data.sayHello(0)
    this.setData({ items: mydata })
  },
  capsuleActive(e) {
    
  },
  tabClick(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  swiperChange(e){
    // console.log(e.detail.source)
    // console.log(e.detail.current)
    this.setData({
      sliderOffset: 10 + (this.data.windowWidth - 40) / 14 * (e.detail.current),
      activeIndex: e.detail.current
    });
  }
});