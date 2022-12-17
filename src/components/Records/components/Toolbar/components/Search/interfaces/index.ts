import React, { SetStateAction } from 'react'

export interface InputSearchProps {
  search: {
    search: string
    setSearch: React.Dispatch<SetStateAction<string>>
  }
}
