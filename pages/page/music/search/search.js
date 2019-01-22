// pages/page/music/search/search.js
import Sever from './searchSever'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        searchList:[],
        hotList:[],
        suggestList:[],
        inpueValue:'',
        isSuggest:false,
        isHot:true,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //热搜
        let _this = this
        Sever.getHot().then(res => {
            _this.setData({
                hotList: res.result.hots
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
    //搜索建议
    changSearch(event){
        let _this = this
        let txt = event.detail.value
        if (txt){
            Sever.getSuggest(txt).then(res => {
                _this.setData({
                    suggestList: res.result.allMatch,
                    isSuggest:true,
                })
            })
        }else{
            _this.setData({
                isSuggest: false
            })
        }
        
    },
    //搜索
    searchBtn(event){
        let _this = this
        let inpueValue = event.detail.value
        Sever.getSearch(inpueValue).then(res => {
            _this.setData({
                searchList: res.result.songs,
                isSuggest: false,
                isHot:false,
                inpueValue
            })
        })
    },
    //点击搜索建议
    clickSuggest(event){
        let _this = this
        let inpueValue = event.target.dataset.value
        Sever.getSearch(inpueValue).then(res => {
            _this.setData({
                searchList: res.result.songs,
                isSuggest: false,
                isHot: false,
                inpueValue
            })
        })
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