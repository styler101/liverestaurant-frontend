import axios from 'axios'
import { StoragedData } from './interfaces'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
})

const storagedData = JSON.parse(
  String(localStorage.getItem('@waiterapp'))
) as StoragedData | null

if (storagedData) {
  const { accessToken } = storagedData
  axiosInstance.defaults.headers.common['Authorization'] = accessToken
    ? `Bearer ${accessToken}`
    : ''
}

export default axiosInstance
