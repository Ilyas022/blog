import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3003/',
})

axiosInstance.interceptors.request.use((config) => {
  const token = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')!).user).user.token

  config.headers.Authorization = `Bearer ${token}`
  return config
})
