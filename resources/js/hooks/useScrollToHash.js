import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On every route change, scroll to the target section if a URL hash is
 * present, otherwise scroll to the top. This reproduces the original
 * same-page anchor navigation but also works across routes.
 */
export default function useScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // Wait a tick so the destination content is mounted on the new route.
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [pathname, hash])
}