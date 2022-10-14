import {defineStore} from "pinia";
import axios from "axios";
import {getList} from '../api'

export const productStore = defineStore('product',{
    state(){
        products:[]
    },
    actions:{
        async getProduct(){ // 在pinia中发送请求
            let res = await getList()
            this.products = res.data.data //请求到的数据保存在state.products中
        }
    }
})