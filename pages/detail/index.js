'use strict';
var data = require('../../utils/data.js')
const app = getApp()
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    navtit:'',
    url: [],
    back: false,
    isLook: false
  },
  onShow() {
  },
  onLoad(options) {
    this.setData({ navtopHeight: app.globalData.navtopHeight + 10, navTopTit: app.globalData.navtopHeight - app.globalData.navtopSystem * 2 + 10, navtopSystem: app.globalData.navtopSystem })
    var mydata = data.sayHello(options.id)
    this.setData({ navtit: mydata.title, url: mydata.detail })
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面，B页面Page对象
    var prevPage = pages[pages.length - 2];  //上一个页面，A页面的Page对象 
    if (pages.length > 1){
      this.setData({ back: true })
    }
  },
  back(){
    wx.navigateBack({
      delta: 1
    })
  },
  content(){
    this.setData({ isLook: !this.data.isLook })
  }
});