import API from '../../../../utils/API'
export default class {
    static getRankingList(){
        return API({
            url:'/toplist'
        })
    }
}