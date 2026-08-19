import { useRef, useEffect, useState } from 'react'


const genres = [
  {
    id: 'mpb',
    label: 'MPB',
    image: '/img/foto-ceu-aesthetic.jpeg',
    artists: ['Chico Buarque', 'Caetano Veloso', 'Gilberto Gil', 'Milton Nascimento', 'Djavan', 'Marisa Monte'],
    songs: ['Construção', 'Aquele Abraço', 'Preciso Me Encontrar', 'Anunciação'],
  },
  {
    id: 'reggae',
    label: 'Reggae',
    image: '/img/foto-tocando-beco.jpeg',
    artists: ['Natiruts', 'Cidade Negra', 'Bob Marley', 'Edson Gomes'],
    songs: ['Que Sorte a Nossa', 'A Saudade Mata a Gente', 'No Woman No Cry', 'Onde Você Mora?'],
  },
  {
    id: 'rock',
    label: 'Rock Nacional',
    image: '/img/foto-bar.jpeg',
    artists: ['Legião Urbana', 'Titãs', 'Raul Seixas', 'Charlie Brown Jr.', 'Capital Inicial', 'Os Paralamas'],
    songs: ['Monte Castelo', 'Eduardo e Mônica', 'Tédio', 'Por Você'],
  },
]

const CARD_H = 'clamp(420px, 58vw, 560px)'

function useInView(options) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

export default function Repertorio() {
  const [eyebrowRef, eyebrowVisible] = useInView({ threshold: 0.12 })
  const [headerRef,  headerVisible]  = useInView({ threshold: 0.12 })
  const [paraRef,    paraVisible]    = useInView({ threshold: 0.12 })
  const [card0Ref,   card0Visible]   = useInView({ threshold: 0.1 })
  const [card1Ref,   card1Visible]   = useInView({ threshold: 0.1 })
  const [card2Ref,   card2Visible]   = useInView({ threshold: 0.1 })

  const cardRefs    = [card0Ref,    card1Ref,    card2Ref]
  const cardVisible = [card0Visible, card1Visible, card2Visible]

  return (
    <section className="section-py">
      <span id="repertorio" className="scroll-anchor" aria-hidden="true" />
      <div className="wrap">

        {/* Cabeçalho */}
        <div className="section-header" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div ref={eyebrowRef} style={{ display: 'inline-block', overflow: 'hidden' }}>
            <span
              className="eyebrow text-[#C8264A]"
              style={{
                display: 'block',
                transform: eyebrowVisible ? 'translateY(0)' : 'translateY(100%)',
                opacity: eyebrowVisible ? 1 : 0,
                transition: 'transform 1.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease',
              }}
            >✦ Repertório ✦</span>
          </div>

          <div ref={headerRef} style={{ overflow: 'hidden' }}>
            <h2
              className="title-section text-white"
              style={{
                display: 'block',
                transform: headerVisible ? 'translateY(0)' : 'translateY(100%)',
                opacity: headerVisible ? 1 : 0,
                transition: 'transform 1.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease 0.1s',
              }}
            >
              Música para <span className="text-[#C8264A]">todo gosto</span>
            </h2>
          </div>

          <p
            ref={paraRef}
            className="text-white/60"
            style={{
              maxWidth: '440px',
              fontSize: 'clamp(0.92rem, 1.8vw, 1.02rem)',
              lineHeight: '1.8',
              textAlign: 'center',
              marginInline: 'auto',
              opacity: paraVisible ? 1 : 0,
              transform: paraVisible ? 'translateY(0)' : 'translateY(22px)',
              transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s',
            }}
          >
            Repertório vasto e adaptável. Nossa setlist é montada sob medida para cada evento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1rem' }}>
          {genres.map((g, i) => (
            <div
              key={g.id}
              ref={cardRefs[i]}
              className="group relative overflow-hidden"
              style={{
                height: CARD_H,
                cursor: 'default',
                borderRadius: '4px',
                opacity: cardVisible[i] ? 1 : 0,
                transform: cardVisible[i] ? 'translateY(0)' : 'translateY(36px)',
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s`,
              }}
            >
              {/* Imagem de fundo */}
              <img
                src={g.image}
                alt={g.label}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />

              {/* Gradiente permanente */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,.93) 0%, rgba(0,0,0,.48) 45%, rgba(0,0,0,.06) 100%)',
                }}
              />

              {/* Hover: leve escurecimento extra */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{ background: 'rgba(0,0,0,0.2)', transition: 'opacity 0.35s ease' }}
              />

              {/* Conteúdo */}
              <div
                className="absolute inset-0 z-10 flex flex-col justify-end"
                style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                <div className="divider-brand" />
                <h3 className="title-card text-white" style={{ marginBottom: '1.25rem' }}>
                  {g.label}
                </h3>

                <div style={{ marginBottom: '1rem' }}>
                  <span className="eyebrow text-[#C8264A]" style={{ fontSize: '0.58rem', marginBottom: '0.4rem' }}>
                    Artistas
                  </span>
                  <p className="text-white/70" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                    {g.artists.join(' · ')}
                  </p>
                </div>

                <div>
                  <span className="eyebrow text-[#C8264A]" style={{ fontSize: '0.58rem', marginBottom: '0.4rem' }}>
                    Exemplos
                  </span>
                  <ul style={{ fontSize: '0.8rem' }}>
                    {g.songs.map(s => (
                      <li key={s} className="text-white/55 flex items-center" style={{ gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span className="text-[#C8264A]" style={{ flexShrink: 0 }}>—</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
