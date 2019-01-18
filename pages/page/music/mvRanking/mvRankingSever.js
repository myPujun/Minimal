import API from '../../../../utils/API'
export default class{
    static getRanking(){
        return API({
            url: '/top/mv?limit=30'
        })
    }
}