//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    picUrl: '/resources/img/nutcracker.jpg',
    author: "抚远",
    list: [{
      id: 'view',
      name: '视图容器',
      open: false,
      img: '/resources/img/view.png',
      pages: [{
        pageName: 'scroll-view',
        url: '/pages/view/scrollview/scrollview'
      }, {
        pageName: 'swiper',
        url: '/pages/view/swiper/swiper'
      }, {
        pageName: '模拟Table',
        url: '/pages/view/tableview/tableview'
      }]
    }, {
      id: 'richtext',
      name: '富文本',
      open: false,
      img: '/resources/img/form.png',
      pages: [{
        pageName: '富文本Table',
        url: '/pages/richtext/richtext'
      }]
    }, {
      id: 'template',
      name: '模板&组件',
      open: false,
      img: '/resources/img/form.png',
      pages: [{
        pageName: '表格模板',
        url: '/pages/view/tableviewtpl/tableviewtpl'
      }, {
          pageName: '对话框组件',
          url: '/pages/view/dialogCmp/dialogCmp'
        }]
    }, {
      id: 'charts',
      name: ' 统计图表',
      open: false,
      img: '/resources/img/storage.png',
      pages: [{
        pageName: 'area',
        url: '/pages/charts/area/area'
      }, {
        pageName: 'column',
        url: '/pages/charts/column/column'
      }, {
        pageName: 'line',
        url: '/pages/charts/line/line'
      }, {
        pageName: 'pie',
        url: '/pages/charts/pie/pie'
      }, {
        pageName: 'radar',
        url: '/pages/charts/radar/radar'
        }, {
          pageName: 'ring',
          url: '/pages/charts/ring/ring'
        }, {
          pageName: 'scrollline',
          url: '/pages/charts/scrollline/scrollline'
        }]
    }, ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  },
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  }
})