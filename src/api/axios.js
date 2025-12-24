import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://portofolio-v1-6ce71de4e1ae.herokuapp.com/api'
})

export default instance
