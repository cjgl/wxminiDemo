// pages/view/scrollview/scrollview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav1: "top-hoverd-btn",
    nav2: "",
    nav3: "",
    nav4: "",
    nav5: "",
    nav6: "",
    nav7: "",
    nav8: "",
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    setTimeout(function() {
      that.setData({
        hidden: true
      });
    }, 1500);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  toNav: function(e) {
    this.clearNavCss();
    var key = "nav" + e.target.dataset.seq; 
    this.setData({
      [key]: "top-hoverd-btn"
    });
  },
  clearNavCss: function() {
    this.setData({
      nav1: "",
      nav2: "",
      nav3: "",
      nav4: "",
      nav5: "",
      nav6: "",
      nav7: "",
      nav8: "",
    });
  }
})