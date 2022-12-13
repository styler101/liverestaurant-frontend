import { getAllClients } from '../../../services'
export const statusLabel = {
  1: {
    color: '#21ba45',
    name: 'Ativo',
  },

  0: {
    color: '#9f3a38',
    name: 'Inativo',
  },
}

export const dropOptions = [
  {
    text: 'Extrair Dados',
    handler: async () => await getAllClients(true),
    disabled: false,
  },
]
