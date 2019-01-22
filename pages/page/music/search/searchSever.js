import API from '../../../../utils/API'
export default class {
    static getSearch(txt){
        return API({
            url:`/search?keywords=${txt}`
        })
    }   
    static getHot(){
        return API({
            url:'/search/hot'
        })
    }
    static getSuggest(txt){
        return API({
            url:`/search/suggest?keywords=${txt}&type=mobile`
        })
    }
}
