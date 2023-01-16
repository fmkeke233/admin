import fetch from '@/config/fetch'

//添加一个
export const addOneAbalone = data => {
    fetch('/admin/add', data, 'POST')
}
