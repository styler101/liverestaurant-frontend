export async function delay(value: number = 1000) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(resolve)
    }, value)
  })
}
