import {defineStore} from "pinia";
import {getList} from '../api'

export const listStore = defineStore('list',{
    actions:{ // function
        // 发送请求，且返回响应数据
        getData(){
            return new Promise((resolve, reject)=>{
                getList().then(res=>{
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
            })
        }
    },
    persist:{ // 持久化
        enabled: true, // 开启
    }

})


