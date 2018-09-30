var app = getApp()
Component({
  externalClasses: ["my-class"],
  options: {
    multipleSlots: true
  },
  properties: {

  },
  data: {
    navtopHeight: app.globalData.navtopHeight + 10,
    capsuleTop: app.globalData.navtopHeight - 60,
    isFollow:true
  },
  methods: {
    capsuleActive(e) {
      if (e.currentTarget.dataset.id - 0) 
      this.setData({ isFollow: false })
      else this.setData({ isFollow: true })
    }
  }
})
