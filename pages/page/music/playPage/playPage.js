// pages/page/music/playPage/playPage.js
    import API from '../../../../utils/API'
Page({
    data: {
        songUrl:''
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
        API({
            url:'/song/url?id=33894312'
        }).then(res => {
            console.log(res)
            this.setData({
                songUrl:res.data 
            })
            const innerAudioContext = wx.createInnerAudioContext()
            innerAudioContext.autoplay = true
            innerAudioContext.src = this.data.songUrl[0].url
            innerAudioContext.onPlay(() => {
                console.log('开始播放')
            })
            innerAudioContext.onError((res) => {
                console.log(res.errMsg)
                console.log(res.errCode)
            })
        })
    },
    timeSliderChanged: function (e) {
        if (!this.duration) return;

        var time = this.duration * e.detail.value / 100;

        this.setData({
            audioAction: {
                method: 'setCurrentTime',
                data: time
            }
        });
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