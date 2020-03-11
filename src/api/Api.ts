import { AxiosInstance } from 'axios'
import UserApi from './UserApi'
import ProductApi from './ProductApi'

export default class Api {
  requester: AxiosInstance

  constructor(requester: AxiosInstance) {
    this.requester = requester
  }

  user = new UserApi(this.requester)
  product = new ProductApi(this.requester)
}
