import React, { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import { Button } from 'semantic-ui-react'
import { download } from '@/utils/Download'
import { Records } from '@/components/Records/components'
import { Toolbar } from '@/components/Records/components/Toolbar'
import { getAllClients } from '../../services/index'

import { BodyInterface, DataInterface } from './interfaces'
import header from './header'

import dataMapper from './mappers/parser'
import { DropDownItemProps, SortState } from '@/types/Records'

export function Manager() {
  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState<DataInterface[]>([])
  const [body, setBody] = useState<BodyInterface[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const [sort, setSort] = useState<SortState>({} as SortState)

  const reloader = async () => {
    setTimeout(() => {
      console.log('Camada para api')
    }, 100)
  }

  const loadData = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getAllClients(search, sort, false)
      setBody(dataMapper.toDomain(data))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [search, data, sort])

  useEffect(() => {
    loadData()
  }, [loadData])

  const extractData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await getAllClients(search, sort, true)
      download(response.path)
      toast.success('Ação realizada com succeso!')
    } catch (error) {
      toast.error('Erro ao realizar ação')
    } finally {
      setLoading(false)
    }
  }, [])

  const dropOptions = [
    {
      text: 'Extrair Dados',
      handler: extractData,
      disabled: false,
    },
  ]

  const getItem = (item: BodyInterface): DropDownItemProps[] => {
    return [
      {
        content: 'Editar',
        onClick: () => console.log(item),
        disabled: false,
      },
      {
        content: 'Deletar',
        onClick: () => alert('true'),
        disabled: true,
      },
    ]
  }

  return (
    <React.Fragment>
      {/** ts-ignore */}
      <Toolbar
        dropdown={dropOptions.length > 0 ? dropOptions : []}
        search={{ search, setSearch }}
        reloader={reloader}
      />
      <Records
        header={header}
        loading={loading}
        rows={body}
        getItem={getItem}
        search={search}
        sort={{ sort, setSort }}
      />
    </React.Fragment>
  )
}
