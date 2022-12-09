export function filterData(row: any, fields: String[]): any[] {
  const filtersColumns = Object.keys(row)
    .map((key) => (fields.includes(key) ? row[key] : null))
    .filter((item) => item !== null)
  return filtersColumns
}
