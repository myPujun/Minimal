// pages/page/music/videoPlay/playPage.js
import Sever from './videoPlaySever'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        viedoDetails:{},
        hotComments:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this
        Sever.getVideoId(options.id).then(res => {
            console.log(res)
            _this.setData({
                viedoDetails:res.data
            })
        })
        Sever.getHotComment(options.id).then(res => {
            _this.setData({
                hotComments: res.hotComments
            })
        })
        wx.setNavigationBarTitle({
            title: 'MV',
        })
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