import axios from '@/services'
import { SortState } from '@/types/Records'

export const getAllClients = async (
  search: string,
  sort: SortState,
  extract: boolean = false
): Promise<any> => {
  let params: any = {}
  console.log('Sort', sort)
  if (search) {
    params.q = search
  }
  if (sort) {
    params.sort = sort['name']
    params.direction = sort['direction']
  }
  console.log('Params', params)
  const { data } = await axios.get(`/peoples${extract ? '.xlsx' : ''}`, {
    params,
  })
  return data
}
