'use strict';
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

    item: [{ 
      img: '../../IMG/20180724175048.png',
      types: 1,
      name: '甜美的咬痕',
      author: '锐思+伊凯',
      title: '誓言篇 第33话 浪漫誓言誓言篇',
      zan: '81万',
      msg: '56524'
      }
    ]
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
        });
      }
    });
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