import React from 'react'
import { Bullet } from '@/components/Bullet'
import { DataInterface, BodyInterface } from '../interfaces'

class DataMapper {
  toDomain(data: DataInterface[]): BodyInterface[] {
    return data.map((item) => {
      let parsedItem: BodyInterface = {
        status: item.status,
        status_jsx: (
          <Bullet
            color={item.status === 0 ? '#9f3a38' : '#21ba45'}
            content={item.status === 0 ? 'Inativo' : 'Ativo'}
          />
        ),
        name: item.name,
        email: item.email,
        phone: item.phone,
        city: item.city,
        state: item.state,
        address: item.address,
        zipcode: item.zipcode,
      }

      return parsedItem
    })
  }
}

export default new DataMapper()
