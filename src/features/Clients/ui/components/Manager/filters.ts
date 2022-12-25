import { FilterOptions } from '@/types/Records'
import { Bullet } from '@/components/Bullet'

const filters: FilterOptions[] = [
  {
    label: 'status',
    name: 'status',
    options: [
      {
        label: 'Ativo',
        value: 1,
      },
      {
        label: 'Inativo',
        value: 1,
      },
    ],
  },
]
