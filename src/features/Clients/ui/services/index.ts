import axios from '@/services'

export const getAllClients = async (
  search?: string,
  extract: boolean = false
): Promise<any> => {
  let params: any = {}
  if (search) {
    params.q = search
  }
  const { data } = await axios.get(`/peoples${extract ? '.xlsx' : ''}`, {
    params,
  })
  return data
}
