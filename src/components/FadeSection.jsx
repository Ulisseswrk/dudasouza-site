import { useRef, useEffect } from 'react'

export default function FadeSection({ children }) {
  const wrapRef = useRef(null)
  const fadeRef = useRef(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const onScroll = () => {
      const { top, height } = el.getBoundingClientRect()
      const raw      = -top / height          // 0 → 1 conforme a seção sai pelo topo
      const delayed  = Math.max((raw - 0.65) / 0.35, 0) // só ativa nos últimos 35%
      const opacity  = Math.min(delayed, 1) * 0.6        // máximo 60% de escurecimento
      if (fadeRef.current) fadeRef.current.style.opacity = opacity
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('touchmove', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('touchmove', onScroll)
    }
  }, [])

  return (
    <div ref={wrapRef} style={{ position: 'relative' }}>
      {children}
      <div
        ref={fadeRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: '#000',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 49,
        }}
      />
    </div>
  )
}
