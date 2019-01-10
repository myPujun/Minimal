//index.js
//获取应用实例
import API from '../../../../utils/API'
Page({
    data:{
        BoutiqueList:[],
        HotSongList:[],
    },
    onShow(){
        const _this = this
        API({
            url:'/top/playlist/highquality?before=1503639064232&limit=6'
        }).then(res => {
            console.log(res)
            wx.setStorage({
                key: 'BoutiqueList',
                data: res.playlists,
            })
            _this.setData({
                BoutiqueList: res.playlists
            })
        });
        API({
            url:'/playlist/hot'
        }).then(res => {
            _this.setData({
                HotSongList:res
            })
        })
    }
})
