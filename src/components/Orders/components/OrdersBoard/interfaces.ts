
export interface OrdersBoardProps {
  title: string
  icon: string
  orders: Order[]
}

export interface Product {
  product: string

}
export interface Order {
  _id: string
  table: string
  status: string
  products: Array<{
    quantity: number
    _id: string
    product: {
      name: string
      imagePath: string
      price: number
    }

  }>

}
