import axios from './http'

let data = {api_token: process.env.VUE_APP_API_TOKEN};
// 菜单列表
export const adminApi = {
    menuList: () => axios('get', 'menu', data)
}

