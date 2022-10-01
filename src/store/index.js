import {defineStore} from "pinia";

// const mainStore = defineStore({id:'main', state(){}})
export const mainStore = defineStore('main',{
    // state(){
    //     return{
    //         title:'Gino',
    //         count:66,
    //     }
    // }
    state:()=>({
        title:'Gino',
        count:66,
    }),
    getters:{ // 计算属性
        getCount(){
            return this.count
        }
    },
    actions:{
        addCount(n){
            this.count+=n
        }
    }
})


