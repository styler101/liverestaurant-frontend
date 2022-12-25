import { DropdownProps } from 'semantic-ui-react'
import { FilterOptions } from '@/types/Records'

export interface FilterProps extends DropdownProps {
  filters: FilterOptions[]
}
