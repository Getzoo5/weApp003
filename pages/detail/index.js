<<<<<<< HEAD
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
=======
// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
>>>>>>> 53ce11391aeeca4c83184522e9148173e6a5e64c
