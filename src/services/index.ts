import axios from 'axios'
import { userService } from '@/services/user'
import { loginService } from '@/services/login'

const API_ENVS = {
  development: 'http://localhost:3030/api/',
}

const httpClient = axios.create({
  baseURL: API_ENVS.development,
})

export default {
  user: userService(httpClient),
  login: loginService(httpClient),
}