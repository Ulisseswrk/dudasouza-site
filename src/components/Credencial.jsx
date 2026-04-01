export default function Credencial() {
  return (
    <section className="relative section-py-xl overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/foto-tocando.jpeg')" }}
      />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.76)' }} />

      {/* Conteúdo */}
      <div className="relative z-10 wrap text-center text-white">
        <span className="eyebrow text-[#C8264A]" style={{ marginBottom: '1.5rem' }}>
          ✦ Qualidade que emociona ✦
        </span>

        <h2
          className="title-section text-white mx-auto"
          style={{ maxWidth: '760px', marginBottom: '1.75rem' }}
        >
          Versatilidade que encanta,{' '}
          <span className="text-[#C8264A]">qualidade</span> que emociona
        </h2>

        <p
          className="text-white/55 mx-auto"
          style={{
            maxWidth: '520px',
            fontSize: 'clamp(0.96rem, 2vw, 1.08rem)',
            lineHeight: '1.85',
          }}
        >
          Cada apresentação é única. Com repertório adaptado ao seu evento e
          presença de palco que transforma qualquer momento em memória afetiva.
        </p>
      </div>
    </section>
  )
}