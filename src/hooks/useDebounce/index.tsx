import React from 'react'

export function useDebounce(func: Function, delay: number = 500): Function {
  const timeoutRef = React.useRef<React.MutableRefObject<any | null>>(null)
  // cancelar um agendamento

  // ...arguments
  function debounceFunction() {
    // @ts-expect-error
    clearTimeout(timeoutRef.current)
    // @ts-expect-error
    timeoutRef.current = setTimeout(() => {
      func(...arguments)
    })
    // faz um agendamento o setTimeout sempre vai gerar um id
    setTimeout(() => {}, delay)
  }
  return debounceFunction
}
