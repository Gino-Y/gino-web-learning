import axios from '../utils/request'

export function getData(){
    return axios({
        method:'get',
        url:'home/page/6/10',
    })
}

