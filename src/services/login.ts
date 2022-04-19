import { AxiosInstance } from 'axios'
import type { User } from '@/types'
import { RequestError } from '@/services/errors'


type LoginService = {
  login(username: string, password: string): Promise<LoginResponse>,
}

type LoginResponse = {
  data: User,
  error: RequestError | null
}

export function loginService(httpClient: AxiosInstance): LoginService {
  const path = '/login'

  return {
    login: async (username: string, password: string): Promise<LoginResponse> => {
      const response = await httpClient.post(path, { username, password })

      let error: RequestError | null = null

      if (!response.data) {
        error = new RequestError(response.request.statusText)
      }
      
      return {
        data: response.data,
        error
      }
    }
  }
}

