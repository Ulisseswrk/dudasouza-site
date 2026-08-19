import { useReveal } from '../hooks/useReveal'

const WPP = 'https://wa.me/5511993165681'

export default function Credencial() {
  const bgRef      = useReveal({ threshold: 0.08 })
  const eyebrowRef = useReveal({ threshold: 0.12 })
  const titleRef   = useReveal({ threshold: 0.12 })
  const photosRef  = useReveal({ threshold: 0.1 })

  return (
    <section
      id="sobre"
      style={{
        position: 'relative',
        background: '#000',
        overflow: 'hidden',
        marginBottom: '-1px',
        paddingInline: 'clamp(1.25rem, 5vw, 3rem)',
        paddingBlock: 'clamp(5rem, 10vw, 8rem)',
      }}
    >
      {/* Foto de fundo escura — sobe levemente ao entrar */}
      <div
        ref={bgRef}
        className="reveal-bg-rise"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/img/pessoas-dancando.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />

      {/* Vinheta topo/base — funde a foto de fundo com as seções vizinhas */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '12%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
          pointerEvents: 'none', zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '8%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)',
          pointerEvents: 'none', zIndex: 1,
        }}
      />

      {/* Grid principal: texto | fotos */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1100px',
          marginInline: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(2.5rem, 6vw, 5rem)',
          alignItems: 'center',
        }}
      >
        {/* ── Coluna esquerda: texto ── */}
        <div>

          {/* Título */}
          <div ref={titleRef} className="clip-reveal" style={{ marginBottom: '2rem', paddingTop: '0.15em', marginTop: '-0.15em' }}>
            <h2
              className="clip-inner"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)',
                lineHeight: 1.05,
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                color: '#fff',
                transitionDelay: '0.18s',
              }}
            >
              Presença de palco?{' '}
              <span style={{ color: '#C8264A' }}> é aqui mesmo</span>
            </h2>
          </div>

          {/* Parágrafo 1 */}
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontSize: 'clamp(0.88rem, 1.6vw, 0.98rem)',
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.70)',
              marginBottom: '1.5rem',
              maxWidth: '500px',
            }}
          >
            Nosso repertório que vai de{' '}
            <strong style={{ color: '#fff', fontWeight: 600 }}>
              Marilia Menconça a Steve Wonder
            </strong>
            , passando por MPB e Rock Nacional, muda qualquer ambiente.
            Ta cansado de eventos sem energia? Então você está no lugar certo.
          </p>

          {/* Parágrafo 2 */}
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontSize: 'clamp(0.88rem, 1.6vw, 0.98rem)',
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.70)',
              maxWidth: '500px',
            }}
          >
            Não entregamos qualquer show. Entregamos{' '}
            <strong style={{ color: '#fff', fontWeight: 600 }}>
              presença de palco 
            </strong>
              {' '}e uma energia que transforma qualquer celebração{' '}
            <strong style={{ color: '#fff', fontWeight: 600 }}>
               em uma verdadeira festa.
            </strong>
          </p>
        </div>

        {/* ── Coluna direita: fotos deslizam da direita ── */}
        <div
          ref={photosRef}
          className="reveal-from-right"
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(260px, 42vw, 420px)',
          }}
        >
          {/* Foto esquerda — dançando, inclinada -6deg */}
          <div
            style={{
              position: 'absolute', left: 0, top: '8%',
              width: '60%', height: '86%',
              borderRadius: '10px', overflow: 'hidden',
              transform: 'rotate(-6deg)',
              boxShadow: '0 28px 72px rgba(0,0,0,0.75)',
              zIndex: 1,
              transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'rotate(-3deg) scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-6deg)'}
          >
            <img
              src="/img/pessoas-dancando.jpg"
              alt="Pessoas dançando"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(120deg, rgba(0,0,0,0.35) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Foto direita — cantando, inclinada +5deg */}
          <div
            style={{
              position: 'absolute', right: 0, top: '4%',
              width: '58%', height: '88%',
              borderRadius: '10px', overflow: 'hidden',
              transform: 'rotate(5deg)',
              boxShadow: '0 28px 72px rgba(0,0,0,0.75)',
              zIndex: 2,
              transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'rotate(2deg) scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'rotate(5deg)'}
          >
            <img
              src="/img/foto-sobre.jpeg"
              alt="Duda tocando para a plateia"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(-120deg, rgba(0,0,0,0.3) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />
          </div>
        </div>
      </div>

      {/* ── CTA centralizado no fundo ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          marginTop: 'clamp(3rem, 6vw, 5rem)',
        }}
      >
        <a
          href={WPP}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.32)',
            padding: '1.1rem 3rem',
            borderRadius: '2px',
            textDecoration: 'none',
            transition: 'border-color 0.22s ease, background 0.22s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#C8264A'
            e.currentTarget.style.background = 'rgba(200,38,74,0.12)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.32)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          Faça seu evento ser inesquecível
        </a>
      </div>
    </section>
  )
}
