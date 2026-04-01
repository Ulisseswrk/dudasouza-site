import { useEffect, useState } from 'react'

const WPP = 'https://wa.me/5511999999999'

function WppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Background - REGULE AQUI */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "url('/img/foto-principal.jpeg')",
          /* O valor abaixo 'center 20%' é sua régua:
             0%   = Topo total (cabeça pode encostar no teto)
             20%  = Um pouco mais para baixo (Ideal para fotos verticais)
             50%  = Centro total
          */
          backgroundPosition: 'center 30%' 
        }}
      />
      
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Conteúdo */}
      <div
        className="relative z-10 text-center text-white w-full mx-auto"
        style={{
          maxWidth: '900px',
          // Aumentei um pouco o padding-top para o texto descer mais e não tampar o rosto
          padding: 'clamp(12rem, 25vw, 15rem) 1.5rem clamp(5rem, 10vw, 7rem)',
        }}
      >
        <span className="eyebrow text-[#C8264A] block" style={{ marginBottom: '1.75rem' }}>
          ✦ Músico Profissional ✦
        </span>

        <h1 className="title-hero text-white" style={{ marginBottom: '1.75rem' }}>
          Seu evento merece{' '}
          <span className="text-[#C8264A]">uma música</span>{' '}
          inesquecível
        </h1>

        <p
          className="label text-white/60"
          style={{
            fontSize: 'clamp(0.65rem, 1.6vw, 0.82rem)',
            letterSpacing: '0.28em',
            marginBottom: '3rem',
          }}
        >
          MPB · Reggae · Rock Nacional · Para todo tipo de evento
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center items-center"
          style={{ gap: '0.875rem' }}
        >
          <a href={WPP} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
            <WppIcon /> Peça um Orçamento
          </a>
          <a href="#sobre" className="btn btn-outline-white w-full sm:w-auto">
            Conheça o Artista
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ bottom: '2.25rem', gap: '0.5rem' }}
      >
        <span className="eyebrow text-white/22" style={{ fontSize: '0.55rem', letterSpacing: '0.35em' }}>
          scroll
        </span>
        <div style={{ width: '1px', height: '2rem', background: 'rgba(255,255,255,0.15)' }} />
      </div>
    </section>
  )
}