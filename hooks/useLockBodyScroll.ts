import { useLayoutEffect } from 'react'

const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    const app = document.getElementById('__next') || document.body

    const originalStyle = window.getComputedStyle(app).overflowY
    const originalPosition = window.getComputedStyle(app).position

    if (app) {
      app.style.overflowY = 'hidden'
      app.style.position = 'fixed'
      app.style.width = '100%'
    }

    return () => {
      if (app) {
        app.style.overflowY = originalStyle
        app.style.position = originalPosition
        app.style.width = 'initial'
      }
    }
  }, [])
}

export default useLockBodyScroll
