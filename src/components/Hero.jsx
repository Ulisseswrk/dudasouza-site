import { useEffect, useRef } from 'react'

const WPP = 'https://wa.me/5511993165681'

function WppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function Hero() {
  const fadeRef = useRef(null)

  useEffect(() => {
    const section = fadeRef.current?.closest('section')
    if (!section) return

    const onScroll = () => {
      const { top, height } = section.getBoundingClientRect()
      const progress = Math.min(Math.max(-top / height, 0), 1)
      if (fadeRef.current) fadeRef.current.style.opacity = progress
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('touchmove', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('touchmove', onScroll)
    }
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Fundo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/img/foto-principal.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.04)',
        }}
      />

      {/* Overlay fixo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.82) 100%)',
        }}
      />

      {/* Overlay de scroll — fica preto conforme desce */}
      <div
        ref={fadeRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: '#000',
          opacity: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Conteúdo — centralizado por flex do pai */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '960px',
          marginInline: 'auto',
          paddingInline: 'clamp(1.25rem, 5vw, 2rem)',
          paddingBottom: 'clamp(4rem, 8vw, 6rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '0',
        }}
      >
        {/* Eyebrow */}
        <span
          style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '1.5rem',
            display: 'block',
          }}
        >
          Músico Profissional para o seu evento
        </span>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(2.6rem, 6.5vw, 4.75rem)',
            lineHeight: 1.08,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            color: '#fff',
            marginBottom: '1.75rem',
            maxWidth: '900px',
          }}
        >
          Música ao vivo para um evento{' '}
          <span style={{ color: '#E63946' }}>inesquecível</span>
        </h1>

        {/* Parágrafo */}
        <p
          style={{
            fontFamily: 'Epilogue, sans-serif',
            fontSize: 'clamp(0.88rem, 1.6vw, 0.98rem)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '1.25rem',
            maxWidth: '440px',
          }}
        >
          MPB, Rock Nacional e muito mais... Repertório sob medida para
          casamentos, formaturas, corporativos e bares.
        </p>

        {/* Prova social */}
        <p
          style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '2.75rem',
          }}
        >
          <span style={{ color: '#E63946' }}>+200</span> eventos ·{' '}
          <span style={{ color: '#E63946' }}>5 anos</span> de experiência
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.875rem',
            width: '100%',
          }}
        >
          <a
            href={WPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
          >
            <WppIcon size={17} /> Solicitar orçamento
          </a>
          <a href="#sobre" className="hero-btn-ghost">
            Conheça o artista
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '0.5rem',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.22)',
          }}
        >
          scroll
        </span>
        <div style={{ width: '1px', height: '2rem', background: 'rgba(255,255,255,0.12)' }} />
      </div>
    </section>
  )
}
