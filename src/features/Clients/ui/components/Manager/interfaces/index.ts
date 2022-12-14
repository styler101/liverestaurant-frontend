export interface DataInterface {
  _id: string
  status: number
  name: string
  lastName: string
  email: string
  phone: string
  gender: string
  avatar: string
  brithDate: string
  address: string
  zipCode: string
  city: string
  uf: string
}

export interface BodyInterface {
  _id: string
  status: number
  status_jsx: JSX.Element | null
  name_jsx: string
  email: string
  phone: string
  city: string
  state: string
  zipcode: string
}
