export interface DataInterface {
  status: number
  name: string
  email: string
  phone: string
  city: string
  state: string
  address: string
  zipcode: string
}

export interface BodyInterface {
  status: number
  status_jsx: JSX.Element | null
  name: string
  email: string
  phone: string
  city: string
  state: string
  address: string
  zipcode: string
}
