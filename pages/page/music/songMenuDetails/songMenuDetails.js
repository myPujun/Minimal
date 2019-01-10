import API from '../../../../utils/API'
Page({
    data:{
        songList:[],
        songListLength:null,
        isShow:false,
        activeIndex:null,
        songMenuId:null,
        isPlay:false,
        playlist:{
            id:'',
            name:'',
            coverImgUrl:'',
            description:'',
            tracks:[],
        }
    },
    onLoad(event){
        this.setData({
            songMenuId: event.id
        })
    },
    onShow(){
        let songMenuId = this.data.songMenuId
        API({
            url:`/playlist/detail?id=${songMenuId}`
        }).then(res => {
            this.setData({
                playlist: Object.assign(this.data.playlist,res.playlist),
                songListLength: res.privileges.length
            })
            console.log(res.playlist)
        })
    },
    songListScroll(event){
        let top = event.detail.scrollTop
        if(top >= 170){
            this.setData({
                isShow:true
            })
        }else{
            this.setData({
                isShow: false
            })
        }     
    },
    clickPlay(event){
        let activeIndex = this.data.activeIndex;
        let liIndex = event.currentTarget.dataset.index;
        if (activeIndex == liIndex){
            this.setData({
                activeIndex: null,
                isPlay: false
            })
        }else{
            this.setData({
                activeIndex: liIndex,
                isPlay: true
            })
        }
        this.childrenIsPlay()
    },
    allPlay(){
        let isPlay =  this.data.isPlay
        if (isPlay){
            this.setData({
                activeIndex:null,
                isPlay: false
            })
        }else{
            this.setData({
                activeIndex: 0,
                isPlay: true
            })
        }
        this.childrenIsPlay()
    },
    childrenIsPlay(){
        this.selectComponent("#suspensionPlay").isplay();
    }
})