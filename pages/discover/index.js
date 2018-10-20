'use strict';
var data = require('../../utils/data.js')
var sliderWidth = 35; // 需要设置slider的宽度，用于计算中间位置

const app = getApp()
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    capsuleSet: {
      bg: 'rgba(0,0,0,.8)',
      bgActive: '#fff',
      class: 'class',
      activeClass: 'actives',
      fontActive: '#FCE33E',
      border: '#313232',
      innerText1: '推荐',
      innerText2: '分类',
      backgroundColor:'transparent',
      img: '/assets/icon/discover/man.png',

    },
    navbar: [{icon:'/assets/icon/discover/Rankings.png', name:'排行榜'},
    {icon:'/assets/icon/discover/game.png', name:'游戏'},
    { icon: '/assets/icon/discover/shop.png', name: '商城'},
    { icon: '/assets/icon/discover/classify.png', name: '分类'}],

    transition: ".3s linear",
    transform: "rotate(0deg)",
    clickTimes: 1,

    item: [{tit: '佳作推荐',type: 2,
      list:[
        { name: '诱人美食竟是"人做的"', des: '食饵' },
        { name: '我竟被外星人绑架了', des: '只好背叛地球了' },
        { name: '电竞大神X第一女贼', des: '成也萧何' },
        { name: '与你相遇, 是劫还是缘"', des: '琼楼传'}
      ], ad: '/assets/img/2.png'
    }, {
        tit: '近期新作', type: 3,
        list: [
          { name: '诱人美食竟是"人做的"', des: '食饵' },
          { name: '我竟被外星人绑架了', des: '只好背叛地球了' },
          { name: '电竞大神X第一女贼', des: '成也萧何' },
          { name: '与你相遇, 是劫还是缘"', des: '琼楼传' },
          { name: '与你相遇, 是劫还是缘"', des: '琼楼传' },
          { name: '与你相遇, 是劫还是缘"', des: '琼楼传' }
        ], ad: '/assets/img/2.png'
      }, {
        tit: '热门必看', type: 3,
        list: [
          { name: '诱人美食竟是"人做的"', des: '食饵' },
          { name: '我竟被外星人绑架了', des: '只好背叛地球了' },
          { name: '电竞大神X第一女贼', des: '成也萧何' },
          { name: '与你相遇, 是劫还是缘"', des: '琼楼传' },
          { name: '与你相遇, 是劫还是缘"', des: '琼楼传' },
          { name: '与你相遇, 是劫还是缘"', des: '琼楼传' }
        ]
      }
    ]
  },
  onLoad(options) {
    this.setData({ navtopHeight: app.globalData.navtopHeight + 10, capsuleTop: app.globalData.navtopHeight - 60, height: app.globalData.height })
  },
  change() {
    var clickTimes = this.data.clickTimes
    this.setData({
      transition: ".3s linear",
      transform: "rotate(" + 360 * clickTimes + "deg)"
    })
    setTimeout(res => {
      clickTimes++
      this.setData({
        clickTimes: clickTimes
      })
    }, 800)
  }
});