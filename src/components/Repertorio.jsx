const WPP = 'https://wa.me/5511999999999'

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

/* Altura fixa e igual para os três cards */
const CARD_H = 'clamp(420px, 58vw, 560px)'

export default function Repertorio() {
  return (
    <section id="repertorio" className="section-py" style={{ background: '#f4f4f4' }}>
      <div className="wrap">

        {/* Cabeçalho */}
        <div className="section-header">
          <span className="eyebrow text-[#C8264A]">✦ Repertório ✦</span>
          <h2 className="title-section text-gray-900">
            Música para <span className="text-[#C8264A]">todo gosto</span>
          </h2>
          <p
            className="text-gray-500 flex justify-center"
            style={{
              maxWidth: '440px',
              fontSize: 'clamp(0.92rem, 1.8vw, 1.02rem)',
              lineHeight: '1.8',
            }}
          >
            Repertório vasto e adaptável. O setlist é montado sob medida para cada evento.
          </p>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1.25rem' }}
        >
          {genres.map(g => (
            <div
              key={g.id}
              className="group relative overflow-hidden"
              style={{ height: CARD_H, cursor: 'default' }}
            >
              {/* Imagem de fundo */}
              <img
                src={g.image}
                alt={g.label}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transition: 'transform 0.7s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />

              {/* Gradiente permanente */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,.93) 0%, rgba(0,0,0,.48) 45%, rgba(0,0,0,.06) 100%)',
                  transition: 'opacity 0.3s ease',
                }}
              />

              {/* Hover: leve escurecimento extra */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{ background: 'rgba(0,0,0,0.15)', transition: 'opacity 0.3s ease' }}
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
                  <span
                    className="eyebrow text-[#C8264A]"
                    style={{ fontSize: '0.58rem', marginBottom: '0.4rem' }}
                  >
                    Artistas
                  </span>
                  <p
                    className="text-white/70"
                    style={{ fontSize: '0.8rem', lineHeight: '1.6' }}
                  >
                    {g.artists.join(' · ')}
                  </p>
                </div>

                <div>
                  <span
                    className="eyebrow text-[#C8264A]"
                    style={{ fontSize: '0.58rem', marginBottom: '0.4rem' }}
                  >
                    Exemplos
                  </span>
                  <ul style={{ fontSize: '0.8rem' }}>
                    {g.songs.map(s => (
                      <li
                        key={s}
                        className="text-white/55 flex items-center"
                        style={{ gap: '0.5rem', marginBottom: '0.2rem' }}
                      >
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

        {/* CTA */}
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a
            href={WPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-brand"
          >
            Solicitar Repertório Completo
          </a>
        </div>

      </div>
    </section>
  )
}