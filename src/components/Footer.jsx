import { useReveal } from '../hooks/useReveal'

const WPP = 'https://wa.me/5511999999999'

function IgIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
}

function WppIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
}

export default function Footer() {
  const ref = useReveal({ threshold: 0.1 })

  return (
    <footer className="bg-black text-white">
      <div
        ref={ref}
        className="wrap reveal"
        style={{ paddingTop: 'clamp(3.5rem, 7vw, 5.5rem)', paddingBottom: 'clamp(3.5rem, 7vw, 5.5rem)' }}
      >
        <span id="contato" className="scroll-anchor" aria-hidden="true" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start order-1">
            <a href="#" className="flex items-baseline gap-0.5 hover:opacity-70 transition-opacity">
              <span className="text-[1.8rem] text-[#C8264A] tracking-tighter" style={{ fontFamily: 'Anton, sans-serif' }}>DUDA</span>
              <span className="text-[1.8rem] text-white tracking-tighter" style={{ fontFamily: 'Anton, sans-serif' }}>SOUZA</span>
            </a>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/40 mt-[-5px]">
              Músico Profissional
            </span>
          </div>

          <div className="order-3 md:order-2">
            <p className="text-white/30 font-light tracking-wide text-center" style={{ fontSize: '0.8rem' }}>
              © 2024 Duda Souza <span className="mx-2 text-white/10">|</span> Todos os direitos reservados
            </p>
          </div>

          <div className="flex items-center gap-6 order-2 md:order-3">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-white/50 hover:text-white transition-colors duration-300">
              <IgIcon />
            </a>
            <a href={WPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="text-white/50 hover:text-white transition-colors duration-300">
              <WppIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
