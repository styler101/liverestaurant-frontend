export function download(url: string) {
  let baseUrl = `http://localhost:3001`
  let filePath = baseUrl.concat(url.replace('\\/', '/'))
  let element = document.createElement('a')
  element.href = filePath
  // @ts-expect-error
  element.setAttribute('download', filePath.split('/').pop())

  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
