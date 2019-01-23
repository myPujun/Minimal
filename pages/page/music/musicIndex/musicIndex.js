//index.js
//获取应用实例
import Sever from './musicIndexSever'
Page({
    data:{
        BoutiqueList:[],
        recommendList:[],
        newSongList:[]
    },
    onShow(){
        const _this = this
        Sever.getBoutique().then(res => {
            _this.setData({
                BoutiqueList: res.playlists
            })
        })
        Sever.getRecommend().then(res => {
            _this.setData({
                recommendList: res.result
            })
        })
        Sever.getNewSong().then(res => {
            let newSongList = res.result
            newSongList.splice(6)
            _this.setData({
                newSongList
            })
        })
    },
})
