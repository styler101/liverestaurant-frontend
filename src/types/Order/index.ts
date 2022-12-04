
export interface Index {
  _id: string
  table: string
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
  products: Array<{
    product: {
      name: string
      imagePath: string
      price: number
    }
    _id: string
    quantity: number
  }>
}
