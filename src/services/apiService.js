import axios from 'axios';

const http = {
    get({ url = "", params = {} } = {}) {
        return axios({
            url: url,
            method: 'GET',
            params
        })
            .then(result => result.data)
            .catch(err => {
                throw new Error(err)
            })
    },
    post({ url = "", params = {}, data = {}, headers = {} } = {}) {
        return axios({
            url: url,
            method: 'POST',
            params,
            data,
            headers
        })
            .then(result => result.data)
            .catch(err => {
                throw new Error(err)
            })
    }
}
export default http