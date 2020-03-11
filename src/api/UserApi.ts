import { AxiosInstance } from 'axios'
import { IUser, IPageableRequest } from 'models'
import { toData } from 'utils'

export default class UserApi {
  requester: AxiosInstance

  constructor(requester: AxiosInstance) {
    this.requester = requester
  }

  get = ({ id }): Promise<IUser> => {
    return this.requester.get('/user', { params: { id } }).then(toData)
  }

  getAll = ({ page, size }: IPageableRequest): Promise<Array<IUser>> => {
    return this.requester.get('/users', { params: { page, size } }).then(toData)
  }
}
