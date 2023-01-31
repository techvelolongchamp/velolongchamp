import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    if (document.querySelector('#modal-root')) {
      setIsBrowser(true)
    }
  }, [])

  if (isBrowser) {
    return ReactDOM.createPortal(
      children,
      document.getElementById('modal-root')!
    )
  }
  return null
}

export default Portal
