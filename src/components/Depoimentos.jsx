const deps = [
  {
    text: 'Duda foi incrível no nosso evento corporativo. Repertório impecável, pontualidade e uma energia contagiante. Todos adoraram!',
    nome: 'Marina C.',
    evento: 'Evento Corporativo',
  },
  {
    text: 'Contratei para o aniversário de 30 anos da minha esposa e foi a melhor decisão. Duda leu o clima perfeitamente e fez todo mundo dançar.',
    nome: 'Ricardo M.',
    evento: 'Festa de Aniversário',
  },
  {
    text: 'Promete tudo e entrega muito mais! Nossa formatura ficou inesquecível graças à apresentação do Duda. Super recomendo!',
    nome: 'Fernanda T.',
    evento: 'Formatura',
  },
]

export default function Depoimentos() {
  return (
    <section className="relative section-py overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/foto-tocando-beco.jpeg')" }}
      />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.82)' }} />

      <div className="relative z-10 wrap">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="eyebrow text-[#C8264A]">✦ Depoimentos ✦</span>
          <h2 className="title-section text-white">
            O que dizem sobre <span className="text-[#C8264A]">Duda</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1.25rem' }}
        >
          {deps.map((d, i) => (
            <div
              key={i}
              className="bg-white flex flex-col"
              style={{
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              }}
            >
              {/* Estrelas */}
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#C8264A]" style={{ fontSize: '1rem' }}>★</span>
                ))}
              </div>

              {/* Texto */}
              <p
                className="text-gray-600 italic flex-1"
                style={{
                  fontSize: 'clamp(0.9rem, 1.7vw, 0.98rem)',
                  lineHeight: '1.85',
                  marginBottom: '1.75rem',
                }}
              >
                "{d.text}"
              </p>

              {/* Autor */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid #f0f0f0',
                }}
              >
                <p style={{ fontWeight: 700, fontSize: '0.88rem', color: '#111', marginBottom: '0.25rem' }}>
                  {d.nome}
                </p>
                <span
                  className="eyebrow text-[#C8264A]"
                  style={{ fontSize: '0.6rem' }}
                >
                  {d.evento}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}