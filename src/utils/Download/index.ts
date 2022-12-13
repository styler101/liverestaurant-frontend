export function download(url: string) {
  let filePath = url.replace('\\/', '/')

  let element = document.createElement('a')
  element.href = filePath
  // @ts-expect-error
  element.innerHTML = element.download = filePath.split('/').pop()

  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
