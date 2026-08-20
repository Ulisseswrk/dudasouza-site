import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import ShinyText from './ShinyText'

const WPP = 'https://wa.me/5511993165681?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Duda%20Souza%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

const formacoes = [
  {
    id: '01',
    label: 'Solo Acústico',
    sub: 'Para eventos mais intimistas.',
    desc: 'O clássico voz e violão. Trás bastante intimidade e versatilidade para eventos que pedem mais leveza e música boa.',
    tag: 'Ideal para coquetéis, happy hours, jantares e festas.',
    img: '/img/foto-solo.jpeg',
    imgPosition: 'center 50%',
    destaque: false,
  },
  {
    id: '02',
    label: 'Dueto',
    sub: 'Nosso formato mais pedido.',
    desc: 'Duda (Voz e Violão) + percussão (meia-lua, cajón ou bateria). Com opção de vocal e/ou instumentos como teclado ou segundo violão. Formação adaptável ao evento.',
    tag: 'A escolha perfeita para casamentos, aniversários e eventos corporativos.',
    img: '/img/foto-dupla.jpeg',
    imgPosition: 'center 40%',
    destaque: true,
  },
  {
    id: '03',
    label: 'Trio',
    sub: 'Para eventos de médio porte.',
    desc: 'Duda (Voz e Guitarra) + bateria + baixo. Um som cheio de groove, mantendo clima e animação para o seu evento.',
    tag: 'Ótimo para festas de casamento, aniversários e eventos corporativos maiores.',
    img: '/img/foto-trio.jpeg',
    imgPosition: 'center 0%',
    destaque: false,
  },
  {
    id: '04',
    label: 'Banda Completa',
    sub: 'Para eventos de grande porte.',
    desc: 'Aqui levamos a força máxima. Para quem deseja o melhor da música e com a emoção que só uma banda completa trás.',
    tag: 'Perfeito para festivais, formaturas e grandes eventos.',
    img: '/img/foto-banda.png',
    destaque: false,
  },
]

export default function Servicos() {
  const headerRef = useReveal()
  const gridRef   = useReveal({ threshold: 0.06 })

  return (
    <section className="section-py" style={{ position: 'relative', overflow: 'hidden' }}>
      <span id="servicos" className="scroll-anchor" aria-hidden="true" />
      {/* Foto de fundo escura */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/img/pessoas-dancando.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      />

      {/* Vinheta topo/base — funde a foto de fundo com as seções vizinhas */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '30%',
          background: 'linear-gradient(to bottom, #000 0%, transparent 100%)',
          pointerEvents: 'none', zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '30%',
          background: 'linear-gradient(to top, #000 0%, transparent 100%)',
          pointerEvents: 'none', zIndex: 1,
        }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* Cabeçalho alinhado à esquerda */}
        <div ref={headerRef} className="reveal" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <h2
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              color: '#fff',
              lineHeight: 1,
            }}
          >
            Formações
          </h2>
        </div>

        {/* Grid de cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 stagger"
          style={{ gap: '1.5rem' }}
        >
          {formacoes.map(f => (
            <Card key={f.id} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ label, sub, desc, tag, img, imgPosition = 'center', imgScale = 1, destaque }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Foto */}
      <div
        style={{
          width: '100%',
          aspectRatio: '4/3',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          position: 'relative',
        }}
      >
        <img
          src={img}
          alt={label}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: imgPosition,
            transform: `scale(${hovered ? imgScale * 1.06 : imgScale})`,
            transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1)',
          }}
        />
        {destaque && (
          <span
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              fontFamily: 'Oswald, sans-serif',
              fontSize: '0.55rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#fff',
              background: '#FF5E00',
              padding: '0.3rem 0.75rem',
              borderRadius: '2px',
            }}
          >
            mais pedido
          </span>
        )}
      </div>

      {/* Título com underline */}
      <div style={{ marginBottom: '0.85rem' }}>
        <h3
          style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            color: '#fff',
            lineHeight: 1.05,
            fontStyle: 'italic',
            display: 'inline',
          }}
        >
          {label}
        </h3>
        {/* Underline vermelho */}
        <div
          style={{
            height: '3px',
            background: '#FF5E00',
            marginTop: '0.45rem',
            width: destaque ? '100%' : '65%',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {/* Subtítulo */}
      <p
        style={{
          fontFamily: 'Epilogue, sans-serif',
          fontSize: '1rem',
          fontWeight: 600,
          color: '#fff',
          marginBottom: '0.75rem',
          lineHeight: 1.4,
        }}
      >
        {sub}
      </p>

      {/* Descrição */}
      <p
        style={{
          fontFamily: 'Epilogue, sans-serif',
          fontSize: '0.88rem',
          lineHeight: 1.8,
          color: 'rgba(255,255,255,0.58)',
          marginBottom: '0.75rem',
          flexGrow: 1,
        }}
      >
        {desc}
      </p>

      {/* Tag itálica */}
      <p
        style={{
          fontFamily: 'Epilogue, sans-serif',
          fontSize: '0.84rem',
          fontStyle: 'italic',
          marginBottom: '1.5rem',
          lineHeight: 1.6,
        }}
      >
        {hovered
          ? <ShinyText text={tag} speed={3} color="rgba(255,255,255,0.55)" shineColor="#ffffff" spread={120} />
          : <span style={{ color: 'rgba(255,255,255,0.42)' }}>{tag}</span>
        }
      </p>

      {/* Botão */}
      <a
        href={WPP}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          textAlign: 'center',
          fontFamily: 'Oswald, sans-serif',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#fff',
          border: '1.5px solid #FF5E00',
          padding: '1rem',
          borderRadius: '6px',
          textDecoration: 'none',
          transition: 'background 0.28s ease, border-color 0.28s ease',
          background: hovered ? '#FF5E00' : destaque ? 'rgba(255,94,0,0.12)' : 'transparent',
          marginTop: 'auto',
        }}
      >
        Reserve sua data
      </a>
    </div>
  )
}
