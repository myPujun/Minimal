// pages/page/music/rankingList/rankingList.js
import Sever from './rankingListSever'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        rankingList:[],
        xids:[
            {
                id: 19723756,
                xid:3
            },
            {
                id: 3779629,
                xid:0
            },
            {
                id: 2884035,
                xid:2
            },
            {
                id: 3778678,
                xid:1
            }
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this
        Sever.getRankingList().then(res => {
            let rankingList = res.list
            rankingList.splice(4)
            rankingList.map(function(item,index){
                _this.data.xids.forEach(function(key){
                    if(item.id == key.id){
                        rankingList[index] = Object.assign(rankingList[index], {xid:key.xid})
                    }
                })
            })
            console.log(rankingList)
            _this.setData({
                rankingList
            })
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