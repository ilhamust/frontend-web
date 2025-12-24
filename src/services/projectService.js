import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://portofolio-v1-6ce71de4e1ae.herokuapp.com/api'

const API = axios.create({
  baseURL: API_BASE_URL,
})

// interceptor token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const getProjects = async () => {
  const res = await API.get('/projects')
  return res.data
}

export const createProject = async (form) => {
  const formData = new FormData()
  formData.append('title', form.title)
  formData.append('description', form.description)
  formData.append('tech_stack', form.tech_stack)
  formData.append('github_url', form.github_url)
  formData.append('demo_url', form.demo_url)

  if (form.image) {
    formData.append('image', form.image) // HARUS sama dengan multer
  }

  const res = await API.post('/projects', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  return res.data
}

export const updateProject = async (id, form) => {
  const formData = new FormData()

  Object.keys(form).forEach((key) => {
    if (form[key]) {
      formData.append(key, form[key])
    }
  })

  const res = await API.put(`/projects/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  return res.data
}

export const deleteProject = async (id) => {
  const res = await API.delete(`/projects/${id}`)
  return res.data
}
