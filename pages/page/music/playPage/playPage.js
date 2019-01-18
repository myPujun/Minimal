// pages/page/music/playPage/playPage.js
import API from '../../../../utils/API'
Page({
    data: {
        current:{
            currentTime:'0:00',
            duration:'0:00'
        },
        songId:null,
        songDetails:{},
        isPlay:false,
        songTitle:'',
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (event) {
        this.setData({
            songId:event.id
        })
        this.back = wx.getBackgroundAudioManager();
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        let _this = this
        API({   //获取音乐url
            url: `/song/url?id=${this.data.songId}`
        }).then(res => {
            console.log(res)
            res.data.map(function (item) {
                _this.setData({
                    current: Object.assign(_this.data.current,item)
                })
            })
        }),
        API({   //获取音乐详情
            url:`/song/detail?ids=${this.data.songId}`,
        }).then(res => {
            console.log(res)
            res.songs.map(function(item){
                _this.setData({
                    songDetails:{
                        id:item.id,
                        name: item.al.name,
                        author: item.ar.map(function(author){
                            return author.name
                        }),
                        img: item.al.picUrl
                    }
                })
            })
            wx.setNavigationBarTitle({
                title:this.data.songDetails.name,
            })
            this.playAudio()
        })
    },
    //播放背景音乐
    playAudio(){
        let _this = this
        this.back.src = this.data.current.url
        this.back.title = this.data.songDetails.name
        this.back.coverImgUrl = this.data.songDetails.img
        //播放
        this.audioPlayed()
        //获取背景音乐的长度
        this.audioTimeUpdated()
        //播放完毕
        this.back.onEnded(function () {
            _this.setData({
                isPlay: false
            })
            console.log('播放完毕')
            _this.playAudio()
        })
    },
    //开始播放
    audioPlayed(){
        this.back.play()
        this.setData({
            isPlay:true
        })
    },
    //暂停播放
    audioPause(){
        this.back.pause()
        this.setData({
            isPlay: false
        })
    },
    //获取背景音乐的长度
    audioTimeUpdated(event){
        let _this = this
        let duration,currentTime
        this.back.onTimeUpdate(function () {
            duration = Math.ceil(_this.back.duration)
            currentTime = Math.ceil(_this.back.currentTime)
            let detail = {
                currentTime: _this.Minutes(currentTime, 0) + ':' + _this.Minutes(currentTime),
                duration: _this.Minutes(duration, 0) + ':' + _this.Minutes(duration),
                sumDuration: duration,
                sumCurrentTime: currentTime,
            }
            let current = Object.assign(_this.data.current, detail)
            _this.setData({
                current
            })
            
        })
    },
    //拖动音乐进度条触发
    timeSliderChanged(e){
        let currentTime = e.detail.value
        this.back.seek(currentTime)
        this.setData({
            current: Object.assign(this.data.current, {
                currentTime: this.Minutes(currentTime),
                sumCurrentTime: currentTime
            })
        })
    },
    //转换分秒
    Minutes(number,is){
        if (is == 0){
            let minute = Math.floor(number / 60)
            return minute
        }else{
            let second = Math.floor(number % 60)
            if (second < 10) {
                second = '0' + second
            }
            return second
        }
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