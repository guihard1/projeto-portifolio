import { useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import CustomCursor from '../components/CustomCursor'
import Navbar from '../components/Navbar'
import { setTransitionOrigin } from '../hooks/useTransitionOrigin'

/**
 * Base layout: Lenis smooth scroll (on the window), global cursor and nav.
 * Also records where a link was clicked so the next page can expand from it.
 */
export default function Layout({ children }) {
  useEffect(() => {
    const onClick = (e) => {
      if (e.target.closest?.('a[href]')) setTransitionOrigin(e.clientX, e.clientY)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      <CustomCursor />
      <Navbar />
      <div className="relative">{children}</div>
    </ReactLenis>
  )
}
