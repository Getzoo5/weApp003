var app = getApp()
Component({
  externalClasses: ["my-class"],
  options: {
    multipleSlots: true
  },
  properties: {
    innerText1: { type: String, value: '', },
    innerText2: { type: String, value: '', },
    backgroundColor: { type: String, value: '', },
    capsuleSet: { type: Object, value: '',}
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
    },
    tooltap(e){

    }
  }
})
