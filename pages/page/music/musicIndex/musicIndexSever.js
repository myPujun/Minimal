import API from '../../../../utils/API'
export default class{
    static getBoutique(){
        return API({
            url: '/top/playlist/highquality?before=1503639064232&limit=6'
        })
    }
    static getRecommend(){
        return API({
            url: '/personalized?limit=6'
        })
    }
    static getNewSong(){
        return API({
            url:'/personalized/newsong'
        })
    }
}