import axios from 'axios'

// Gunakan VITE_API_URL dari .env, atau default ke Heroku
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://portofolio-v1-6ce71de4e1ae.herokuapp.com/api'

const api = axios.create({
  baseURL: API_BASE_URL,
})

// otomatis sisipkan token kalau ada
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor untuk debug
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default api
