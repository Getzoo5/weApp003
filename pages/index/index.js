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

<<<<<<< HEAD
    item: [ ]
=======
    item: [{
      img: '../../IMG/1.png',
      types: 1,
      name: '六月的不可思议',
      author: '六柴',
      title: '第49话 总裁是个胆小鬼',
      zan: '23万',
      msg: '26528'
    },{
      img: '../../IMG/2.png',
      types: 1,
      name: '看见漫画偶像',
      author: '看见漫画偶像',
      title: '5强人气男神终于诞生！！',
      zan: '60万',
      msg: '56524'
    },{
      img: '../../IMG/3.png',
      types: 1,
      name: '琼楼传',
      author: '一罐子老丸',
      title: '第1话 穆小楼',
      zan: '81万',
      msg: '56524'
    }, {
      img: '../../IMG/4.png',
      types: 1,
      name: '与子成说',
      author: '四喜',
      title: '第2话 银子...是什么？',
      zan: '81万',
      msg: '56524'
    }, {
      img: '../../IMG/5.png',
      types: 1,
      name: 'SOS!恋爱出了幺蛾子',
      author: '兔街子',
      title: '第39话 啾啾',
      zan: '81万',
      msg: '56524'
    }, {
      img: '../../IMG/6.png',
      types: 1,
      name: '银河来电',
      author: '栗子liz',
      title: '第2话 就叫你“XO”吧！',
      zan: '81万',
      msg: '56524'
    }, {
      img: '../../IMG/7.png',
      types: 1,
      name: '怪奇实录',
      author: '妖春桥',
      title: '第118话 漂亮头发 中',
      zan: '81万',
      msg: '56524'
    }, {
      img: '../../IMG/8.png',
      types: 1,
      name: '甜美的吻痕',
      author: '四喜',
      title: '第99话 等一切结束了，我们结婚吧！！！',
      zan: '81万',
      msg: '56524'
    }]
>>>>>>> 53ce11391aeeca4c83184522e9148173e6a5e64c
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
<<<<<<< HEAD
    var mydata = data.sayHello(0)
    this.setData({ item: mydata })
=======
>>>>>>> 53ce11391aeeca4c83184522e9148173e6a5e64c
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