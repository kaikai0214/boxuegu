//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    indicatorDots: true,
    autoplay:true,
    vertical: false,
    interval:2000,
    duration:500,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    lessons: [
      { img: "https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png", title: "Php", content: "Php是世界上最好的语言", people: "3000人在观看", money: 30000 },
      { img: "https://file.boxuegu.com/e19c53c6c1fa468aad6e11cb61d81b9a.png", title: "Php", content: "Php是世界上最好的语言", people: "3000人在观看", money: 30000 },
      { img: "https://file.boxuegu.com/3940be1c755a44eeb8e2e0aaf984756e.png", title: "Php", content: "Php是世界上最好的语言", people: "3000人在观看", money: 30000 },
      { img: "https://file.boxuegu.com/6c0ffe21a06d421d90be8a0061c14c1a.png", title: "Php", content: "Php是世界上最好的语言", people: "3000人在观看", money: 30000 }
    ],
    recommends:[
      { 
        img1: "https://file.boxuegu.com/e6432db4d06c42b9aca7aede22ba9437.jpg",                       img2:"https://file.boxuegu.com/989b9bd2a12d471b8e7579b7182d08b6.png" }, 
      { 
        img1: "https://file.boxuegu.com/df25a3e7031a48d39a896d4e38d3d3d5.png",
        img2: "https://file.boxuegu.com/854b60de9d6742dbb29a47370b7c8650.png" },
      {
        img1: "https://file.boxuegu.com/746a8e78655a4b3ca97ccad5390fbc4b.png",
        img2: "https://file.boxuegu.com/90bb08a6bacd49baa5492c5eaa94c060.jpg" }
    ],
    frees:[
      { img1: "https://file.boxuegu.com/74773be265b840b3af9da88f6f42841d.jpg", img2:"https://file.boxuegu.com/7e1535f414a64d3fa4d60e7c8a84cca3.jpg"},
      { img1: "https://file.boxuegu.com/3ed09c2ae4ea4542add4ac8b098c9535.jpg", img2: "https://file.boxuegu.com/6a0330c2237b4ed3af2a2703cc2f1419.jpg" },
      { img1: "https://file.boxuegu.com/ccc47386e2b048658f944d0db943321c.jpg", img2: "https://file.boxuegu.com/49b20b70e42e446cafc60f9c6fd98d84.jpg" }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
