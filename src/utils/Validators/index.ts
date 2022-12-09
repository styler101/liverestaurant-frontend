export function notEmptyString(value: string) {
  return typeof value === 'string' && value === '' ? '-' : value
}

export function notEmptyStringOrDefault(
  value: string,
  defaultValue: string = '-'
) {
  return typeof value === 'string' ? value.trim() : defaultValue
}
