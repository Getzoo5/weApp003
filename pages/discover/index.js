'use strict';
var data = require('../../utils/data.js')
var sliderWidth = 35; // 需要设置slider的宽度，用于计算中间位置

const app = getApp()
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
  },
  onLoad(options) {
    this.setData({ navtopHeight: app.globalData.navtopHeight + 10, capsuleTop: app.globalData.navtopHeight - 60, height: app.globalData.height })
  }
});