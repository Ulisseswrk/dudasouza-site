const WPP = 'https://wa.me/5511999999999'

export default function Sobre() {
  return (
    <section id="sobre" className="section-py bg-white overflow-hidden">
      <div className="wrap">
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(3rem, 8vw, 6rem)',
          }}
        >
          {/* ── Texto ── */}
          <div style={{ maxWidth: '520px' }}>
            <span className="eyebrow text-[#C8264A]" style={{ marginBottom: '1.25rem' }}>
              ✦ Sobre o Artista ✦
            </span>

            <h2
              className="title-section text-gray-900"
              style={{ marginBottom: '1.75rem' }}
            >
              Música que{' '}
              <span className="text-[#C8264A]">conecta</span>{' '}
              pessoas
            </h2>

            <p className="body-text" style={{ marginBottom: '1.1rem' }}>
              Duda Souza é músico profissional com anos de experiência em palco,
              levando MPB, Reggae e Rock Nacional para eventos dos mais variados
              estilos — de casamentos íntimos a festas corporativas de grande porte.
            </p>
            <p className="body-text" style={{ marginBottom: '2.5rem' }}>
              Com repertório amplo e adaptável, Duda entende o momento de cada
              evento e transforma a música em experiência. Cada apresentação é
              pensada com cuidado para criar a atmosfera perfeita para o seu público.
            </p>

            <a href={WPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Quero Contratar
            </a>
          </div>

          {/* ── Imagens sobrepostas ── */}
          <div
            className="relative w-full mx-auto"
            style={{
              height: 'clamp(320px, 52vw, 560px)',
              maxWidth: '500px',
            }}
          >
            {/* Foto principal — ocupa topo direito */}
            <div
              className="absolute overflow-hidden"
              style={{
                top: 0, right: 0,
                width: '80%', height: '78%',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              }}
            >
              <img
                src="/img/foto-studio-sorrindo.jpeg"
                alt="Duda Souza no estúdio"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>

            {/* Foto secundária — canto inferior esquerdo, sobreposta */}
            <div
              className="absolute overflow-hidden"
              style={{
                bottom: 0, left: 0,
                width: '48%', height: '44%',
                border: '4px solid #fff',
                boxShadow: '0 12px 40px rgba(0,0,0,0.14)',
              }}
            >
              <img
                src="/img/foto-sorrindo.jpeg"
                alt="Duda Souza sorrindo"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>

            {/* Acento vermelho — quadrado decorativo */}
            <div
              className="absolute bg-[#C8264A]"
              style={{
                width: '2.75rem', height: '2.75rem',
                bottom: '42%', right: '18%',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}