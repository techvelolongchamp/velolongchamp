import { useState, useEffect } from 'react'

export const useMatches = (query: string): boolean => {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    if (window) {
      const media = window.matchMedia(query)
      if (media.matches !== matches) {
        setMatches(media.matches)
      }
      const listener = () => setMatches(media.matches)
      media.addListener(listener)
      return () => media.removeListener(listener)
    }
  }, [query])
  return matches
}
