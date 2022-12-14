import React from 'react'
import { Bullet } from '@/components/Bullet'
import { DataInterface, BodyInterface } from '../interfaces'
import { notEmptyStringOrDefault } from '@/utils/Validators'

class DataMapper {
  toDomain(data: DataInterface[]): BodyInterface[] {
    return data.map((item) => {
      let parsedItem: BodyInterface = {
        _id: item._id,
        status: item.status,
        status_jsx: (
          <Bullet
            color={item.status === 0 ? '#9f3a38' : '#21ba45'}
            content={item.status === 0 ? 'Inativo' : 'Ativo'}
          />
        ),
        name_jsx: notEmptyStringOrDefault(item.name + ' ' + item.lastName),
        email: notEmptyStringOrDefault(item.email),
        phone: notEmptyStringOrDefault(item.phone),
        city: notEmptyStringOrDefault(item.city),
        state: notEmptyStringOrDefault(item.uf),
        zipcode: notEmptyStringOrDefault(item.zipCode),
      }

      return parsedItem
    })
  }
}

export default new DataMapper()
