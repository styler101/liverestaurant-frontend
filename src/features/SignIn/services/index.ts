import axios from '@/services'
import { FormValues } from '../interfaces'

export const authentication = async({ email, password }: FormValues): Promise<any> => {
  const { data } = await axios.post('/signin', {
    email,
    password
  })
  const { success, data: responseData } = data
  if (!success) throw new Error('Invalid Request')

  return responseData
}
