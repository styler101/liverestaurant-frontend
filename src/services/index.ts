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
  console.log('Usuário Logado')
  const { accessToken } = storagedData
  console.log(accessToken)
  axiosInstance.defaults.headers.common['Authrozation'] = accessToken
    ? `Bearer ${String(accessToken)}`
    : ''
}

export default axiosInstance
