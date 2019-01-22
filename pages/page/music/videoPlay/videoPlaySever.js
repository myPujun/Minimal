import API from '../../../../utils/API'
export default class{
    static getVideoId(id){
        return API({
            url:`/mv/detail?mvid=${id}`
        })
    }
    static getCoverId(coverId){
        return API({
            url: `/related/allvideo?id=${coverId}&type=1014`
        })
    }
    static getHotComment(id){
        return API({
            url:`/comment/mv?id=${id}`
        })
    }
}