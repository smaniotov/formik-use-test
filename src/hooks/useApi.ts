import { createContext, useContext } from 'react'
import axios, { AxiosInstance } from 'axios'
import Api from 'api/Api'

interface IApiContext {
  api: Api
  requester: AxiosInstance
}

const requester = axios.create({
  baseURL: 'http://localhost:8000',
})

export const ApiContext = createContext<IApiContext | undefined>(undefined)

export const useApiProvider = (): IApiContext => {
  const api = new Api(requester)

  return { api, requester }
}

export const useApi = () => {
  return useContext(ApiContext)
}
