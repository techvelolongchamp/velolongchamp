import { useRef, useEffect } from 'react'

const useClickOutside = (callback: () => void, safeZoneSelector?: any) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      const domElement = document.querySelector(safeZoneSelector)
      if (!domElement || !domElement.contains(event.target)) {
        callback()
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  })

  return { wrapperRef }
}

export default useClickOutside
