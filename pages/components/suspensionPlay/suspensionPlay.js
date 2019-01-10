Component({
    properties: {
        defaultValue: {
            type: Boolean
        }
    },
    data:{
        musicPlay: true,
    },
    methods: {
        isplay(){
            console.log(this.properties.defaultValue)
            this.setData({
                musicPlay: this.properties.defaultValue
            })
        }
    },
    //组件生命周期
    lifetimes: {
        attached() {
            // 在组件实例进入页面节点树时执行
            this.setData({
                musicPlay: this.properties.defaultValue
            })
        },
        detached() {
            // 在组件实例被从页面节点树移除时执行
        },
    },
})