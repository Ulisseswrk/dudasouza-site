const eventos = [
  { icon: '🎉', label: 'Aniversários',        desc: 'Festas íntimas ou grandes comemorações' },
  { icon: '🏢', label: 'Corporativos',         desc: 'Confraternizações, lançamentos, happy hours' },
  { icon: '💍', label: 'Casamentos',           desc: 'Cerimônia, coquetel e festa de recepção' },
  { icon: '🍻', label: 'Bares & Restaurantes', desc: 'Programação musical ao vivo' },
  { icon: '🎓', label: 'Formaturas',           desc: 'Bailes e jantares de formatura' },
  { icon: '🎪', label: 'Festivais & Shows',    desc: 'Palco aberto e apresentações especiais' },
]

export default function Eventos() {
  return (
    <section id="eventos" className="section-py bg-white">
      <div className="wrap">

        {/* Cabeçalho */}
        <div className="section-header">
          <span className="eyebrow text-[#C8264A]">✦ Tipos de Evento ✦</span>
          <h2 className="title-section text-gray-900">
            Para qual <span className="text-[#C8264A]">ocasião</span>?
          </h2>
          <p
            className="text-gray-500 mx-auto"
            style={{
              maxWidth: '440px',
              fontSize: 'clamp(0.92rem, 1.8vw, 1.02rem)',
              lineHeight: '1.8',
            }}
          >
            Duda Souza atende todo tipo de evento, adaptando repertório e
            performance ao seu contexto.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1.1rem' }}
        >
          {eventos.map(e => (
            <EventoCard key={e.label} {...e} />
          ))}
        </div>

      </div>
    </section>
  )
}

function EventoCard({ icon, label, desc }) {
  return (
    <div
      className="group text-center cursor-default"
      style={{
        border: '1px solid #e8e8e8',
        padding: 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)',
        transition: 'border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#C8264A'
        e.currentTarget.style.boxShadow   = '0 8px 32px rgba(200,38,74,0.1)'
        e.currentTarget.style.transform   = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#e8e8e8'
        e.currentTarget.style.boxShadow   = 'none'
        e.currentTarget.style.transform   = 'none'
      }}
    >
      <div style={{ fontSize: '2.75rem', marginBottom: '1.25rem', lineHeight: 1 }}>{icon}</div>
      <h3
        className="label text-gray-900 group-hover:text-[#C8264A]"
        style={{
          fontSize: '0.82rem',
          marginBottom: '0.75rem',
          transition: 'color 0.22s ease',
        }}
      >
        {label}
      </h3>
      <p
        className="text-gray-400"
        style={{ fontSize: '0.82rem', lineHeight: '1.65' }}
      >
        {desc}
      </p>
    </div>
  )
}