import 'axios'
import axios from 'axios'

export const BASE_URL = 'api.hoid-hub-api.com'

export const apiClient = axios.create({
    baseURL: `http://${BASE_URL}`,
    headers: {
        'Content-Type': 'application/json',
    },
})