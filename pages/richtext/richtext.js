// pages/richtext/richtext.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [{ //表格配置
      name: "table",
      attrs: {
        style: "  text-align: center",
      },
      children: [{
        name: "thead",
        attrs: {
          style: "border:1px solid #999;color:black",
          class: ""
        },
        children: [{
          name: "tr",
          children: [{
            name: "th",
            attrs: {},
            children: [{
              type: "text",
              text: "姓名"
            }]
          },
          {
            name: "th",
            attrs: {},
            children: [{
              type: "text",
              text: "昵称"
            }]
          },
          {
            name: "th",
            attrs: {},
            children: [{
              type: "text",
              text: "年龄"
            }]
          }
          ]

        }],
      },
      {
        name: "tbody",
        attrs: {
          style: "border:1px solid #999;color:blue",
          class: ""
        },
        children: [{
          name: "tr",
          children: [{
            name: "td",
            attrs: {},
            children: [{
              type: "text",
              text: "Tom"
            }]
          },
          {
            name: "td",
            attrs: {},
            children: [{
              type: "text",
              text: "Tom"
            }]
          },
          {
            name: "td",
            attrs: {},
            children: [{
              type: "text",
              text: "10"
            }]
          }]
        }],
      }
      ],
    }]
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