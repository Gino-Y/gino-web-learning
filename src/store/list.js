import {defineStore} from "pinia";
import {getList} from '../api'

export const listStore = defineStore('list',{
    state(){
        return {
            items:[
                {product_id: 1, product_name: 'Abc', product_uprice: 123},
                {product_id: 2, product_name: 'Def', product_uprice: 456},
                {product_id: 3, product_name: 'Ghi', product_uprice: 789},
              ]
        }
    },
    actions:{ // function
        async getData(){
            let res = await getList();
            this.items = res.data.data;
        }
    },
    persist:{ // 持久化
        enabled: true, // 开启
    }

})




