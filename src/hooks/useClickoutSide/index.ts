import { useEffect, useRef } from 'react'

function useOnClickOutSide(handler: any) {
  const ref = useRef(null)

  useEffect(() => {
    const listener = (event: any) => {
      // @ts-expect-error
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])

  return ref
}

export default useOnClickOutSide
