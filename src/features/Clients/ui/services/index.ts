import axios from '@/services'

export const getAllClients = async (extract: boolean = false): Promise<any> => {
  const { data } = await axios.get(`/peoples${extract ? '.xlsx' : ''}`)
  return data
}
