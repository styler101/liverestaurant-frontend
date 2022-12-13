import { ColumnProps } from '@/types/Records'

const header: ColumnProps[] = [
  {
    content: 'Status',
    key: 'status_jsx',
    sortKey: 'status',
    width: 2,
    textAlign: 'center',
  },
  {
    content: 'Nome',
    key: 'name_jsx',
    sortKey: 'name',
    width: 2,
    textAlign: 'center',
  },
  {
    content: 'Email',
    key: 'email',
    sortKey: 'email',
    width: 2,
    textAlign: 'center',
  },
  {
    content: 'Telefone',
    key: 'phone',
    sortKey: 'phone',
    width: 2,
    textAlign: 'center',
  },

  {
    content: 'Cidade',
    key: 'city',
    sortKey: 'city',
    width: 2,
    textAlign: 'center',
  },

  {
    content: 'Estado',
    key: 'state',
    sortKey: 'state',
    width: 2,
    textAlign: 'center',
  },

  {
    content: 'Cep',
    key: 'zipcode',
    sortKey: 'zipcode',
    width: 2,
    textAlign: 'center',
  },
]

export default header
