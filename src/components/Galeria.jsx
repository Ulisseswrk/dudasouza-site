const allPhotos = [
  { src: '/img/foto-principal.jpeg',      alt: 'Duda Souza' },
  { src: '/img/foto-bar.jpeg',            alt: 'Show no bar' },
  { src: '/img/foto-tocando.jpeg',        alt: 'Tocando' },
  { src: '/img/foto-street.jpeg',         alt: 'Na rua' },
  { src: '/img/foto-ceu-aesthetic.jpeg',  alt: 'Foto aesthetic' },
  { src: '/img/foto-tocando-beco.jpeg',   alt: 'Tocando no beco' },
  { src: '/img/foto-sorrindo.jpeg',       alt: 'Sorrindo' },
  { src: '/img/foto-studio-sorrindo.jpeg',alt: 'No estúdio' },
]

function GalItem({ src, alt }) {
  return (
    <>
      <img
        src={src} alt={alt}
        className="w-full h-full object-cover"
        style={{ transition: 'transform 0.55s ease' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: 'rgba(0,0,0,0)',
          transition: 'background 0.3s ease',
          pointerEvents: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.35)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0)'}
      />
    </>
  )
}

export default function Galeria() {
  return (
    <section id="galeria" className="section-py" style={{ background: '#f4f4f4' }}>
      <div className="wrap">

        {/* Cabeçalho */}
        <div className="section-header">
          <span className="eyebrow text-[#C8264A]">✦ Galeria ✦</span>
          <h2 className="title-section text-gray-900">
            Veja <span className="text-[#C8264A]">Duda</span> em ação
          </h2>
        </div>

        {/* Mobile / tablet (< lg): 2 colunas com aspect-ratio uniforme */}
        <div
          className="grid grid-cols-2 lg:hidden"
          style={{ gap: '0.6rem' }}
        >
          {allPhotos.map((p, i) => (
            <div
              key={i}
              className="relative overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              <GalItem src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>

        {/* Desktop (≥ lg): grid assimétrico */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows:    'repeat(3, 250px)',
            gap: '0.6rem',
          }}
        >
          {/* Coluna 1, linhas 1-2: foto principal tall */}
          <div className="relative overflow-hidden" style={{ gridRow: 'span 2' }}>
            <GalItem src="/img/foto-principal.jpeg" alt="Duda Souza" />
          </div>

          {/* Linha 1 restante */}
          <div className="relative overflow-hidden">
            <GalItem src="/img/foto-tocando.jpeg" alt="Tocando" />
          </div>
          <div className="relative overflow-hidden">
            <GalItem src="/img/foto-bar.jpeg" alt="Show no bar" />
          </div>
          <div className="relative overflow-hidden">
            <GalItem src="/img/foto-ceu-aesthetic.jpeg" alt="Aesthetic" />
          </div>

          {/* Linha 2: foto-street wide */}
          <div className="relative overflow-hidden" style={{ gridColumn: 'span 2' }}>
            <GalItem src="/img/foto-street.jpeg" alt="Na rua" />
          </div>
          <div className="relative overflow-hidden">
            <GalItem src="/img/foto-sorrindo.jpeg" alt="Sorrindo" />
          </div>

          {/* Linha 3 */}
          <div className="relative overflow-hidden" style={{ gridColumn: 'span 2' }}>
            <GalItem src="/img/foto-tocando-beco.jpeg" alt="Tocando no beco" />
          </div>
          <div className="relative overflow-hidden">
            <GalItem src="/img/foto-studio-sorrindo.jpeg" alt="No estúdio" />
          </div>
        </div>

      </div>
    </section>
  )
}