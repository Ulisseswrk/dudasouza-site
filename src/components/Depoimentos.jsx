import { useReveal } from '../hooks/useReveal'

const WPP = 'https://wa.me/5511993165681'

const deps = [
  {
    nome: 'Marina C. (Evento Corporativo)',
    text: '"Duda foi incrível no nosso evento. Repertório e pontualidade impecáveis, fora a energia contagiante. Todo mundo cantou!"',
    align: 'left',
    maxWidth: '640px',
  },
  {
    nome: 'Ricardo M. (Festa de Aniversário)',
    text: '"Contratei para o aniversário de 30 anos da minha esposa e foi a melhor decisão. No final, todo mundo estava dançando. Recomendo demais!"',
    align: 'right',
    maxWidth: '580px',
  },
  {
    nome: 'Fernanda T. (Formatura)',
    text: '"(...) Promete tudo e entrega mais ainda. Nossa foi demais. Queria me formar denovo só para contratá-lo mais uma vez!"',
    align: 'left',
    maxWidth: '760px',
  },
]

export default function Depoimentos() {
  const secRef = useReveal({ threshold: 0.04 })

  return (
    <section className="relative overflow-hidden" style={{ paddingBlock: 'clamp(10rem, 10vw, 15rem)' }}>
      <span id="depoimentos" className="scroll-anchor" aria-hidden="true" />

      {/* Blob background */}
      <div className="absolute inset-0" style={{ zIndex: 0, background: '#000', overflow: 'hidden' }}>

        <div style={{
          position: 'absolute',
          width: '80vw', height: '80vw',
          background: '#C8264A',
          filter: 'blur(100px)',
          opacity: 0.6,
          top: '-10%', left: '-20%',
          willChange: 'transform',
          animation: 'blobMove1 8s ease-in-out infinite, blobMorph1 6s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          width: '65vw', height: '65vw',
          background: '#7a1530',
          filter: 'blur(90px)',
          opacity: 0.65,
          bottom: '-20%', right: '-15%',
          willChange: 'transform',
          animation: 'blobMove2 10s ease-in-out infinite, blobMorph2 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          width: '50vw', height: '50vw',
          background: '#e8375a',
          filter: 'blur(80px)',
          opacity: 0.4,
          top: '20%', left: '35%',
          willChange: 'transform',
          animation: 'blobMove3 7s ease-in-out infinite, blobMorph1 5s ease-in-out infinite reverse',
        }} />

        {/* Fade topo → preto */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '35%',
          background: 'linear-gradient(to bottom, #000 0%, transparent 100%)',
          pointerEvents: 'none', zIndex: 2,
        }} />
        {/* Fade base → preto */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '35%',
          background: 'linear-gradient(to top, #000 0%, transparent 100%)',
          pointerEvents: 'none', zIndex: 2,
        }} />
      </div>
      <style>{`
        @keyframes blobMove1 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(8vw, 10vh); }
          50%  { transform: translate(4vw, 18vh); }
          75%  { transform: translate(-4vw, 8vh); }
          100% { transform: translate(0, 0); }
        }
        @keyframes blobMove2 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(-10vw, -12vh); }
          50%  { transform: translate(-6vw, -20vh); }
          75%  { transform: translate(5vw, -10vh); }
          100% { transform: translate(0, 0); }
        }
        @keyframes blobMove3 {
          0%   { transform: translate(0, 0); }
          33%  { transform: translate(-8vw, 12vh); }
          66%  { transform: translate(6vw, -8vh); }
          100% { transform: translate(0, 0); }
        }
        @keyframes blobMorph1 {
          0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25%  { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50%  { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; }
          75%  { border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        @keyframes blobMorph2 {
          0%   { border-radius: 40% 60% 60% 40% / 40% 50% 50% 60%; }
          33%  { border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%; }
          66%  { border-radius: 100% 56% 56% 100% / 100% 100% 56% 56%; }
          100% { border-radius: 40% 60% 60% 40% / 40% 50% 50% 60%; }
        }
      `}</style>

      <div
        ref={secRef}
        className="reveal"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1100px',
          marginInline: 'auto',
          paddingInline: 'clamp(1.25rem, 5vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(3rem, 7vw, 5.5rem)',
        }}
      >

        {deps.map((d, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: d.align === 'right' ? 'flex-end' : 'flex-start',
              maxWidth: d.maxWidth,
              marginLeft:  d.align === 'right' ? 'auto' : undefined,
              marginRight: d.align === 'left'  ? 'auto' : undefined,
            }}
          >
            {/* Nome em itálico acima */}
            <span
              className="reveal-large"
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontStyle: 'italic',
                fontSize: 'clamp(0.82rem, 1.5vw, 0.95rem)',
                color: '#fff',
                marginBottom: '0.6rem',
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {d.nome}
            </span>

            {/* Frase grande e bold */}
            <p
              className="reveal-large"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(1.45rem, 3.2vw, 2.15rem)',
                fontWeight: 400,
                textTransform: 'uppercase',
                lineHeight: 1.18,
                letterSpacing: '0.01em',
                color: '#fff',
                textAlign: d.align === 'right' ? 'right' : 'left',
                transitionDelay: `${i * 0.15 + 0.1}s`,
              }}
            >
              {d.text}
            </p>
          </div>
        ))}

        {/* CTA button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(1rem, 3vw, 2rem)' }}>
          <a
            href={WPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#fff',
              background: 'rgba(0,0,0,0.55)',
              border: '1px solid rgba(255,255,255,0.25)',
              padding: '1.1rem 2.5rem',
              borderRadius: '4px',
              textDecoration: 'none',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.5s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(181, 181, 181, 0.8)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
          >
            Garanta o melhor para sua festa aqui
          </a>
        </div>

      </div>
    </section>
  )
}
