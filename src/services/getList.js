import http from './apiService'

/**
 * 获取列表
 */
export const getListService = async () => {
    let result = await http.get({
        url: 'http://127.0.0.1:8888/list'
    }).catch(err => {
        throw new Error(err);
    }
    )
    if (result) {
        return result
    } else {
        throw new Error('缺少data字段')
    }
}