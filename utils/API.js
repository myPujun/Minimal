
export default function(obj){
    let parameter = {
        url:'',
        type:'GET',
        dataType:'json',
        headers: {
            'Content-type':'application/text',
        },
        data:{}
    }
    //参数合并
    parameter = Object.assign(parameter,obj)

    //判断头类型是否json,如果是则需要转一下参数类型
    if(parameter.headers['Content-type'] === 'application/json'){
        parameter.data = JSON.stringify(parameter.data)
    }

    return new Promise(function(resolve,reject){
        wx.request({
            url: 'http://localhost:3000'+parameter.url,
            data: parameter.data,
            method: parameter.type, 
            // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            header:parameter.headers,
            dataType:parameter.dataType,
            success: function({data,statusCode}){
                resolve(data)
            },
            fail: function() {
                reject('失败了');
            }
        })
    })

}