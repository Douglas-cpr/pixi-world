import { AxiosInstance } from 'axios'
import type { User } from '@/types'
import { RequestError } from '@/services/errors'

type UserService = {
  get: () => Promise<GetResponse>,
}

type GetResponse = {
  data: User[],
  error: RequestError | null
}

export function userService(httpClient: AxiosInstance): UserService {
  const path = '/user'

  return {
    get: async (): Promise<GetResponse> => {
      const response = await httpClient.get(path)

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