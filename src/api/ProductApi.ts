import { AxiosInstance } from 'axios'
import { IProduct, IPageableRequest } from 'models'
import { toData } from 'utils'

export default class ProductApi {
  requester: AxiosInstance

  constructor(requester: AxiosInstance) {
    this.requester = requester
  }

  getProduct = (id): Promise<IProduct> => {
    return this.requester.get('/product', { params: { id } }).then(toData)
  }

  getAll = ({ page, size }: IPageableRequest): Promise<Array<IProduct>> => {
    return this.requester
      .get('/products', { params: { page, size } })
      .then(toData)
  }
}
