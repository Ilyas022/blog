import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

axiosInstance.interceptors.request.use((config) => {
  const token = JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')!).user).user.token

  config.headers.Authorization = `Bearer ${token}`
  return config
})
