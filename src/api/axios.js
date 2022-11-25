import axios from "axios"

export const api = axios.create({
    baseURL:'http://172.18.6.136:3001/api/v1' 
})

const getPosts = async () => {
    const response = await api.get('/items')
    return response.data
}

export default getPosts;