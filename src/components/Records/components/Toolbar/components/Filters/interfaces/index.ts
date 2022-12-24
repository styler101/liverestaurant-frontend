interface OptionProps {
  label: string | JSX.Element
  value: number
}
export interface FilterOptions {
  label: string
  name: string
  options: OptionProps[]
}
